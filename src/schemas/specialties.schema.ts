import { z } from "zod";

// Define a validation schema for a single file
const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, { // Max size: 5MB
    message: "File size must be less than or equal to 5MB",
  })
  .refine((file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type), { // Allowed MIME types
    message: "File must be a JPEG, PNG, or PDF",
  })

export const createSpecialtiesSchema = z.object({
    title: z.string({
        required_error:"Title is required"
    }),
    file: z.string({
      required_error: 'Image is required'
    }).transform((val)=> {
      const fileName = "image.png";
      //console.log(new File(val, { type: fileName }) )
    })
})






// Define a schema for multiple files (optional)
const filesSchema = z.array(fileSchema).nonempty({
  message: "You must upload at least one file",
});