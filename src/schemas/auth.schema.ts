import { NonWhiteSpaceRegex } from "@/constants/global.constant";
import { z } from "zod";


export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, { message:  "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is required !",
    })
    .min(1, { message:  "Password is required !" })
    .min(6, { message: "Password minimum 6 characters" })
    .trim()
    .max(60, { message: "Password maximum 60 characters" })
    .refine((value) => NonWhiteSpaceRegex.test(value), {
      message: "Password must not contain Whitespaces!",
    }),
});
