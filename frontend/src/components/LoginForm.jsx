import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';

const MIN_USERNAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 5;

const zSchema = z
  .object({
    username: z
      .string()
      .min(MIN_USERNAME_LENGTH, 'Username must be at least 3 characters.'),
    password: z
      .string()
      .min(MIN_PASSWORD_LENGTH, 'Password must be at least 5 characters.'),
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

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/login', data);
      const { token } = response.data;
      localStorage.setItem('smartphone-store-token', token);
      return navigate('/dashboard');
    } catch (error) {
      setError('root', {
        type: 'custom',
        message: error.response.data.message,
      });
    }
  };

  return (
    <form action="/projects/new" onSubmit={ handleSubmit(onSubmit) }>
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
