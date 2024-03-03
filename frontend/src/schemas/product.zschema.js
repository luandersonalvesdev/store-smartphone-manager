import { z } from 'zod';

const zProductSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required.'),
    price: z
      .number(),
    model: z
      .string()
      .trim()
      .min(1, 'Model is required.'),
    brand: z
      .string()
      .trim()
      .min(1, 'Brand is required.'),
    color: z
      .string()
      .trim()
      .min(1, 'Color is required.'),
  })
  .required();

export default zProductSchema;
