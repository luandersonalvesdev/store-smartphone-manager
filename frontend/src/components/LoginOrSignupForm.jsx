import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import zLoginSignupSchema from '../schemas/loginAndSignup.zschema';
import useLoginOrSignup from '../hooks/useLoginOrSignup';
import LoadingSpinner from '../animations/LoadingSpinner';

const INPUT_CSS = 'w-full py-1 px-2 border border-gray-300 rounded outline-none';
const P_INPUT_ERROR_CSS = `text-red-500 bg-red-50 text-sm border rounded border-red-200 
px-1 mt-1 text-center`;

export default function LoginOrSignupForm() {
  const { loginOrSignup } = useLoginOrSignup();
  const {
    register,
    handleSubmit,
    setError,
    reset,
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
      const response = await loginOrSignup(endpoint, data);
      const { token } = response.data;
      localStorage.setItem('smartphone-manager-token', token);
      return navigate('/dashboard');
    } catch (error) {
      reset({
        password: '',
      });
      setError('root', {
        type: 'custom',
        message: error.response.data.message,
      });
    }
  };

  const isButtonDisabled = Object.keys(errors).filter((key) => key !== 'root').length > 0;

  return (
    <div className="bg-gray-50 shadow-sm rounded-t-xl px-8 py-8">
      <h2 className="opacity-80 text-4xl mb-10 font-semibold">
        {
          getEndpoint() === 'login'
            ? 'Login'
            : 'Signup'
        }
      </h2>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="mb-5">
          <label
            className="block mb-1 text-base opacity-50"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className={ INPUT_CSS }
            { ...register('username') }
            type="text"
            name="username"
            id="username"
          />
          {
            errors.username
              && (
                <p className={ P_INPUT_ERROR_CSS }>{errors.username.message}</p>
              )
          }
        </div>
        <div className="mb-10">
          <label
            className="block mb-1 text-base opacity-50"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={ INPUT_CSS }
            { ...register('password') }
            type="password"
            name="password"
            id="password"
          />
          {
            errors.password
              && (
                <p className={ P_INPUT_ERROR_CSS }>{errors.password.message}</p>
              )
          }
        </div>
        {
          errors.root
            && (
              <p
                className="text-red-500 bg-red-50 border rounded border-red-200 px-2 py-1
                mt-4 text-center"
              >
                {errors.root.message}
              </p>
            )
        }
        <button
          className="
            w-full bg-gunmetal hover:brightness-90 text-white font-semibold py-2 px-4
            rounded duration-300 mt-2 cursor-pointer disabled:cursor-not-allowed
            disabled:opacity-40"
          disabled={ isButtonDisabled }
          type="submit"
        >
          {
            getEndpoint() === 'login' && (
              isSubmitting ? <LoadingSpinner /> : 'Login'
            )
          }
          {
            getEndpoint() !== 'login' && (
              isSubmitting ? <LoadingSpinner /> : 'Signup'
            )
          }
        </button>
      </form>
    </div>
  );
}
