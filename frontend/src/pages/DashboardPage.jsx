import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import AddNewProductForm from '../components/AddNewProductForm';

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <AddNewProductForm />
      <ProductsList />
    </main>
  );
}
