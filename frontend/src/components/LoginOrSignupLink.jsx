import { Link } from 'react-router-dom';

export default function LoginOrSignupLink() {
  const currentUrl = window.location.href.includes('login');
  return (
    <div
      className="bg-green-200 rounded-b-xl flex justify-center items-center
      py-6 px-6 text-center text-wrap shadow-md"
    >
      {
        currentUrl
          ? (
            <p className="text-sm font-normal">
              {'Don\'t have an account? '}
              <Link className="underline font-medium" to="/signup">Sign up</Link>
            </p>
          )
          : (
            <p className="text-sm font-normal">
              {'Already have an account? '}
              <Link className="underline font-medium" to="/login">Log in</Link>
            </p>
          )
      }
    </div>
  );
}
