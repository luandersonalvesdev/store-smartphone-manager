import { ToastContainer } from 'react-toastify';
import LoginOrSignupForm from '../components/LoginOrSignupForm';
import LoginOrSignupLink from '../components/LoginOrSignupLink';

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center h-screen mx-10">
      <div className="flex flex-col justify-center w-[325px]">
        <LoginOrSignupForm />
        <LoginOrSignupLink />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={ 3000 }
        hideProgressBar
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
    </main>
  );
}
