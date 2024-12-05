import convertToImageFile from "@/helper/convertToImageFile";
import { z } from "zod";

export const createSpecialtiesSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  file: z
    .string({
      required_error: "Image is required",
    })
    .min(1, { message: "Image is required" })
    .transform((val) => (val === "" ? "" : convertToImageFile(val)))
    .refine((file) => (file as File).size <= 100 * 1024, { // Max size: 100 KB
      message: "File size must be less than or equal to 100 KB",
    })
});

