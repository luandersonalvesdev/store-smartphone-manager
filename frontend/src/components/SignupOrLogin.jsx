import { Link } from 'react-router-dom';

export default function SignupOrLogin() {
  const currentUrl = window.location.href.includes('login');
  return (
    <div>
      {
        currentUrl
          ? (
            <p>
              {'Don\'t have an account? '}
              <Link to="/signup">Sign up</Link>
            </p>
          )
          : (
            <p>
              Already have an account?
              <Link to="/login">Log in</Link>
            </p>
          )
      }
    </div>
  );
}
