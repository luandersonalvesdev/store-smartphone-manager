import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const MIN_USERNAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 5;

const zSchema = z
  .object({
    username: z
      .string()
      .min(MIN_USERNAME_LENGTH, 'Username must be at least 3 characters'),
    password: z
      .string()
      .min(MIN_PASSWORD_LENGTH, 'Password must be at least 5 characters'),
  })
  .required();

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(zSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((r) => setTimeout(r, 2000));
      throw new Error();
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'Username not found',
      });
    }
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div>
        <label htmlFor="username">Username</label>
        <input
          { ...register('username') }
          type="text"
          name="username"
          id="username"
        />
        <span>{errors.username && errors.username.message}</span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          { ...register('password') }
          type="password"
          name="password"
          id="password"
        />
        <span>{errors.password && errors.password.message}</span>
      </div>
      <button
        disabled={ isSubmitting }
        type="submit"
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
      <p>{errors.root && errors.root.message}</p>
    </form>
  );
}