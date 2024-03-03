import LoginOrSignupForm from '../components/LoginOrSignupForm';
import LoginOrSignupLink from '../components/LoginOrSignupLink';

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen mx-10">
      <div className="flex flex-col justify-center max-w-[350px]">
        <LoginOrSignupForm />
        <LoginOrSignupLink />
      </div>
    </main>
  );
}
