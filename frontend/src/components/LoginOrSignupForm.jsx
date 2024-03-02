import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import zLoginSignupSchema from '../schemas/loginAndSignup.zschema';

export default function LoginOrSignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(zLoginSignupSchema),
  });

  const navigate = useNavigate();

  const getEndpoint = () => {
    const currentUrl = window.location.href;
    const splitedUrl = currentUrl.split('/');
    return splitedUrl[splitedUrl.length - 1];
  };

  const onSubmit = async (data) => {
    try {
      const endpoint = getEndpoint();
      const response = await axios.post(`/${endpoint}`, data);
      const { token } = response.data;
      localStorage.setItem('smarphone-manager-token', token);
      return navigate('/dashboard');
    } catch (error) {
      setError('root', {
        type: 'custom',
        message: error.response.data.message,
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
        {
          getEndpoint() === 'login' && (
            isSubmitting ? 'Logging in...' : 'Login'
          )
        }
        {
          getEndpoint() !== 'login' && (
            isSubmitting ? 'Signing in...' : 'Signup'
          )
        }
      </button>
      <p>{errors.root && errors.root.message}</p>
    </form>
  );
}
