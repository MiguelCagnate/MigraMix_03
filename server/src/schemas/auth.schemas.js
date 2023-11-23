import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First Name is required" })
      .max(50, {
        message: "Full Name must be a maximum of 50 characters.",
      }),
    lastName: z.string().min(1, { message: "Last Name is required" }).max(50, {
      message: "Full Name must be a maximum of 50 characters.",
    }),
    username: z.string().min(1, { message: "User Name is required" }).max(20, {
      message: "User Name must be a maximum of 13 characters.",
    }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Incorrect Email format" })
      .max(120, {
        message: "Email must be a maximum of 8 characters.",
      }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    role: z.string({ required_error: "Role is required" })
  })
  .refine((data) => data.firstName !== data.lastName, {
    message: "First name cannot be the same as Last name",
  });
