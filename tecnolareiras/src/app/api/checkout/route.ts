import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const SHIPPING_COST_CENTS = 990;
const FREE_SHIPPING_THRESHOLD_CENTS = 15000;

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 });
    }

    const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item: { id: string; name: string; price: number; quantity: number }) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            metadata: { product_id: item.id },
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })
    );

    const subtotalCents = items.reduce(
      (sum: number, item: { price: number; quantity: number }) =>
        sum + Math.round(item.price * 100) * item.quantity,
      0
    );

    const shippingOptions: Stripe.Checkout.SessionCreateParams.ShippingOption[] =
      subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS
        ? [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: 0, currency: "eur" },
                display_name: "Envio Grátis",
                delivery_estimate: { minimum: { unit: "business_day", value: 3 }, maximum: { unit: "business_day", value: 7 } },
              },
            },
          ]
        : [
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: SHIPPING_COST_CENTS, currency: "eur" },
                display_name: "Envio Standard",
                delivery_estimate: { minimum: { unit: "business_day", value: 3 }, maximum: { unit: "business_day", value: 7 } },
              },
            },
            {
              shipping_rate_data: {
                type: "fixed_amount",
                fixed_amount: { amount: 0, currency: "eur" },
                display_name: "Envio Grátis (acima de 150€)",
                delivery_estimate: { minimum: { unit: "business_day", value: 5 }, maximum: { unit: "business_day", value: 10 } },
              },
            },
          ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "multibanco", "mb_way"],
      line_items: lineItems,
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["PT", "ES"] },
      shipping_options: shippingOptions,
      locale: "pt",
      success_url: `${origin}/checkout/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancelado`,
      metadata: { source: "tecnolareiras-web" },
      invoice_creation: { enabled: true },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    const message = err instanceof Error ? err.message : "Erro interno";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
