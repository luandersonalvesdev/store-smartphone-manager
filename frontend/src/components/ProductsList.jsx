import { useContext } from 'react';
import useGetProducts from '../hooks/useGetProducts';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductDetails from './ProductDetails';

export default function ProductsList() {
  useGetProducts();
  const { allProducts } = useContext(ProductsContext);

  return (
    <ul>
      {
        allProducts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((product) => {
            return (
              <li key={ product.id }>
                <ProductDetails product={ product } />
              </li>
            );
          })
      }
    </ul>
  );
}
