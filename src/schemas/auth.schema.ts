import { MobileRegx, NonWhiteSpaceRegex } from "@/constants/global.constant";
import capitalizeValidator from "@/helper/capitalizeValidator";
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


export const RegisterSchema = z.object({
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
  patientData: z.object({
    email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, { message:  "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, { message: '"Name is required"' })
      .trim()
      .max(60, "Name maximum 60 characters.")
      .refine(capitalizeValidator, {
        message: "Name must be in capitalize format",
      })
      .refine((value) => /^[A-Za-z\s]+$/.test(value), {
        message: "Name must only contain alphabets", //"Name must only contain letters and spaces"
      }),
    contactNumber: z
      .string({
        required_error: 'Contact Number is required'
      })
      .trim()
      .min(1, { message: "Contact Number is required" })
      .trim()
      .refine((value) => MobileRegx.test(value), {
        message: "Invalid Mobile Number",
      }),
    address: z
      .string({
        required_error: "Address is required",
      })
      .min(1, { message: "Address is required" })
      .trim()
      .max(60, "Address maximum 60 characters.")
  }),
});