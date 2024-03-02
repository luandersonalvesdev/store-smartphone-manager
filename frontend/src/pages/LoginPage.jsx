import LoginOrSignupForm from '../components/LoginOrSignupForm';
import SignupOrLogin from '../components/SignupOrLogin';

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <LoginOrSignupForm />
      <SignupOrLogin />
    </main>
  );
}
