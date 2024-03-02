import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductDetails from './ProductDetails';
import FilterProducts from './FilterProducts';

export default function ProductsList() {
  const { allProducts } = useContext(ProductsContext);
  const [filterValue, setFilterValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('name');

  const filteredProducts = allProducts.filter((product) => {
    return product[selectedCategory].toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <div>
        <FilterProducts
          onFilterChange={ (value) => setFilterValue(value) }
          onCategoryChange={ (category) => setSelectedCategory(category) }
        />
      </div>
      <ul>
        {
          filteredProducts
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
    </>
  );
}
