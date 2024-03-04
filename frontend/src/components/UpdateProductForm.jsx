import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import ProptTypes from 'prop-types';
import { ProductsContext } from '../contexts/ProductsContext';
import zProductSchema from '../schemas/product.zschema';
import useUpdateProduct from '../hooks/useUpdateProduct';

export default function UpdateProductForm(
  { product: { name, brand, color, model, price, id }, setEditing },
) {
  const { setAllProducts } = useContext(ProductsContext);
  const { updateProduct } = useUpdateProduct();
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(zProductSchema),
    defaultValues: {
      name,
      brand,
      color,
      model,
      price,
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await updateProduct(data, id);
      setAllProducts((prev) => {
        const updatedProd = response.data;
        return prev.map((prod) => (prod.id === updatedProd.id ? updatedProd : prod));
      });
    } catch (err) {
      window.location.reload();
      setError('root', {
        type: 'custom',
        message: err.response.data.message,
      });
    } finally {
      setEditing(false);
    }
  };

  return (
    <form
      className="mt-2"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div>
        <input
          className="w-full py-1 px-2 border border-gray-300 rounded outline-none
          placeholder:text-red-400 placeholder:italic placeholder:text-opacity-50"
          { ...register('name') }
          type="text"
          placeholder={ errors.name?.message }
        />
      </div>
      <div>
        <input
          className="w-full py-1 px-2 border border-gray-300 rounded outline-none"
          { ...register('brand') }
          type="text"
          placeholder={ errors.brand?.message }
        />
      </div>
      <div>
        <input
          className="w-full py-1 px-2 border border-gray-300 rounded outline-none"
          { ...register('model') }
          type="text"
          placeholder={ errors.model?.message }
        />
      </div>
      <div>
        <input
          className="w-full py-1 px-2 border border-gray-300 rounded outline-none"
          { ...register('color') }
          type="text"
          placeholder={ errors.color?.message }
        />
      </div>
      <div>
        <input
          className="w-full py-1 px-2 border border-gray-300 rounded outline-none"
          { ...register('price', {
            setValueAs: (value) => parseFloat(value),
          }) }
          type="number"
          step="any"
          placeholder={ errors.price?.message }
        />
      </div>
      <button
        className="mt-2 bg-green-500 text-white hover:brightness-105 duration-300
        rounded px-6 py-1 text-center text-wrap shadow-md w-full font-bold"
        disabled={ isSubmitting }
        type="submit"
      >
        {isSubmitting ? 'Saving...' : 'Save'}
      </button>
      <p>{errors.root && errors.root.message}</p>
    </form>
  );
}

UpdateProductForm.propTypes = {
  product: ProptTypes.shape({
    name: ProptTypes.string.isRequired,
    brand: ProptTypes.string.isRequired,
    color: ProptTypes.string.isRequired,
    model: ProptTypes.string.isRequired,
    price: ProptTypes.number.isRequired,
    id: ProptTypes.number.isRequired,
  }).isRequired,
  setEditing: ProptTypes.func.isRequired,
};
