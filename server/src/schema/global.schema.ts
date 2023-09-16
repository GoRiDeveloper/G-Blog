import z from "zod";

export const generateSchema = (schema: z.AnyZodObject, where: string) => {
  return z.object({
    [where]: schema,
  });
};
