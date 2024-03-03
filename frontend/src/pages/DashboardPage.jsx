import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import CreateProductForm from '../components/CreateProductForm';

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <CreateProductForm />
      <ProductsList />
    </main>
  );
}
