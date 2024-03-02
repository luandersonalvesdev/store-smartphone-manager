import { z } from 'zod';

const zProductSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Name must be at least 1 characters.'),
    price: z
      .number(),
    model: z
      .string()
      .trim()
      .min(1, 'Model must be at least 1 characters.'),
    brand: z
      .string()
      .trim()
      .min(1, 'Brand must be at least 1 characters.'),
    color: z
      .string()
      .trim()
      .min(1, 'Color must be at least 1 characters.'),
  })
  .required();

export default zProductSchema;
