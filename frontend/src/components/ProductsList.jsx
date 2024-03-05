import { useContext, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductDetails from './ProductDetails';
import FilterProducts from './FilterProducts';
import useGetProducts from '../hooks/useGetProducts';

export default function ProductsList() {
  const { allProducts } = useContext(ProductsContext);
  const [filterValue, setFilterValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('name');
  useGetProducts();

  const filteredProducts = allProducts.filter((product) => {
    return product[selectedCategory].toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div>
      {
        allProducts.length !== 0
        && (
          <div
            className="flex flex-col justify-center items-start rounded-lg mt-3
            mb-10 mx-5 p-5"
          >
            <div>
              <FilterProducts
                onFilterChange={ (value) => setFilterValue(value) }
                onCategoryChange={ (category) => setSelectedCategory(category) }
              />
            </div>
            <div>
              <ul className="flex flex-row flex-wrap gap-5 mt-6">
                {
                  filteredProducts
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((product) => {
                      return (
                        <li
                          className="border rounded-lg py-4 px-4 max-w-52"
                          key={ product.id }
                        >
                          <ProductDetails product={ product } />
                        </li>
                      );
                    })
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  );
}
