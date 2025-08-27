import z from "zod";

/**
 * Login form validation schema
 */
export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(
      /[@$!%*?&]/,
      "Must contain at least one special character (@$!%*?&)"
    ),
});

export type LoginValues = z.infer<typeof loginSchema>;

/**
 * Register form validation schema
 */
export const registerSchema = z
  .object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    email: z.string().email("Invalid email format"),
    phone: z
      .string()
      .regex(/^01[0-9]{9}$/, "Phone must be a valid 11-digit Egyptian number"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(
        /[@$!%*?&]/,
        "Must contain at least one special character (@$!%*?&)"
      ),
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"], // match the actual field name
  });

export type RegisterValues = z.infer<typeof registerSchema>;

