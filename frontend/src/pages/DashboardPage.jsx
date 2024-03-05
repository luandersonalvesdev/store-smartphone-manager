import { ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import CreateProductForm from '../components/CreateProductForm';

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <CreateProductForm />
      <ProductsList />
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
        transition: Bounce
      />
    </main>
  );
}
