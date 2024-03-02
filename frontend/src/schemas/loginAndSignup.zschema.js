import { z } from 'zod';

const MIN_USERNAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 5;

const zLoginSignupSchema = z
  .object({
    username: z
      .string()
      .min(MIN_USERNAME_LENGTH, 'Username must be at least 3 characters.'),
    password: z
      .string()
      .min(MIN_PASSWORD_LENGTH, 'Password must be at least 5 characters.'),
  })
  .required();

export default zLoginSignupSchema;
