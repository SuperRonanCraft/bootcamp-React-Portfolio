import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(100, "Use 100 characters or fewer.")
    .regex(/^[^\r\n]+$/, "Enter your name on one line."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),
  message: z
    .string()
    .trim()
    .min(10, "Please include at least 10 characters.")
    .max(5000, "Use 5,000 characters or fewer."),
  website: z.string().max(200).optional().default(""),
});
