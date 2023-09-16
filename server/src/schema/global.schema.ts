import z from "zod";
// Función para generar un DeepSchema.
export const generateSchema = (
  whereValidate: string,
  schema: z.AnyZodObject
) => {
  return z.object({
    [whereValidate]: schema,
  });
};
