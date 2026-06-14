import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "Password obrigatória"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Password deve ter pelo menos 8 caracteres"),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine((v) => v === true, "Deve aceitar os termos"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords não coincidem",
  path: ["confirmPassword"],
});

export const contactSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Assunto obrigatório"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  consent: z.boolean().refine((v) => v === true, "Deve aceitar a política de privacidade"),
});

export const quotationSchema = z.object({
  title: z.string().min(1, "Título obrigatório"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
});

export const ticketSchema = z.object({
  subject: z.string().min(5, "Assunto deve ter pelo menos 5 caracteres"),
  description: z.string().min(20, "Descrição deve ter pelo menos 20 caracteres"),
  category: z.string().optional(),
  priority: z.enum(["LOW", "NORMAL", "HIGH", "URGENT"]).default("NORMAL"),
});

export const addressSchema = z.object({
  label: z.string().optional(),
  firstName: z.string().min(1, "Nome obrigatório"),
  lastName: z.string().min(1, "Apelido obrigatório"),
  company: z.string().optional(),
  address1: z.string().min(5, "Morada obrigatória"),
  address2: z.string().optional(),
  city: z.string().min(1, "Cidade obrigatória"),
  state: z.string().optional(),
  postalCode: z.string().regex(/^\d{4}-\d{3}$/, "Código postal inválido (XXXX-XXX)"),
  country: z.string().default("PT"),
  phone: z.string().optional(),
  isBilling: z.boolean().default(false),
  isShipping: z.boolean().default(false),
});

export const productSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  slug: z.string().min(1, "Slug obrigatório"),
  description: z.string().optional(),
  shortDescription: z.string().optional(),
  sku: z.string().optional(),
  categoryId: z.string().min(1, "Categoria obrigatória"),
  brandId: z.string().optional(),
  price: z.coerce.number().min(0, "Preço deve ser positivo"),
  salePrice: z.coerce.number().min(0).optional().nullable(),
  stock: z.coerce.number().int().min(0).default(0),
  weight: z.coerce.number().optional().nullable(),
  power: z.string().optional(),
  efficiency: z.string().optional(),
  fuelType: z.enum(["WOOD", "PELLET", "GAS", "ELECTRIC", "MULTI"]).optional().nullable(),
  featured: z.boolean().default(false),
  active: z.boolean().default(true),
});
