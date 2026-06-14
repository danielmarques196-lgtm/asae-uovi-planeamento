import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || "noreply@tecnolareiras.pt";
const FROM_NAME = "Tecnolareiras";

export async function sendWelcomeEmail(to: string, name: string) {
  return resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to,
    subject: "Bem-vindo à Tecnolareiras",
    html: `
      <h1>Olá, ${name}!</h1>
      <p>Bem-vindo à Tecnolareiras. A sua conta foi criada com sucesso.</p>
      <p>Pode aceder à sua área de cliente em <a href="${process.env.NEXT_PUBLIC_APP_URL}/area-cliente">tecnolareiras.pt</a>.</p>
    `,
  });
}

export async function sendOrderConfirmationEmail(
  to: string,
  name: string,
  orderNumber: string,
  total: string
) {
  return resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to,
    subject: `Confirmação de encomenda #${orderNumber}`,
    html: `
      <h1>Encomenda Confirmada</h1>
      <p>Olá ${name},</p>
      <p>A sua encomenda <strong>#${orderNumber}</strong> foi confirmada.</p>
      <p>Total: <strong>${total}</strong></p>
      <p>Pode acompanhar o estado da sua encomenda na sua área de cliente.</p>
    `,
  });
}

export async function sendQuotationEmail(
  to: string,
  name: string,
  reference: string
) {
  return resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to,
    subject: `Pedido de Orçamento #${reference} recebido`,
    html: `
      <h1>Pedido de Orçamento Recebido</h1>
      <p>Olá ${name},</p>
      <p>Recebemos o seu pedido de orçamento <strong>#${reference}</strong>.</p>
      <p>A nossa equipa irá analisar o seu pedido e responder em breve.</p>
    `,
  });
}

export async function sendTicketEmail(
  to: string,
  name: string,
  ticketNumber: string,
  subject: string
) {
  return resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to,
    subject: `Ticket de suporte #${ticketNumber} criado`,
    html: `
      <h1>Ticket de Suporte Criado</h1>
      <p>Olá ${name},</p>
      <p>O seu ticket de suporte <strong>#${ticketNumber}</strong> foi criado.</p>
      <p>Assunto: ${subject}</p>
      <p>A nossa equipa irá responder em breve.</p>
    `,
  });
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  return resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: process.env.EMAIL_FROM || FROM_EMAIL,
    replyTo: data.email,
    subject: `Novo contacto: ${data.subject}`,
    html: `
      <h2>Novo Contacto do Website</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Telefone:</strong> ${data.phone}</p>` : ""}
      <p><strong>Assunto:</strong> ${data.subject}</p>
      <hr/>
      <p>${data.message}</p>
    `,
  });
}
