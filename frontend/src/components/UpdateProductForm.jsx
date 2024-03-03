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
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div>
        <label htmlFor="name">Name</label>
        <input
          { ...register('name') }
          type="text"
        />
        <span>{errors.name && errors.name.message}</span>
      </div>
      <div>
        <label htmlFor="brand">brand</label>
        <input
          { ...register('brand') }
          type="text"
        />
        <span>{errors.brand && errors.brand.message}</span>
      </div>
      <div>
        <label htmlFor="model">model</label>
        <input
          { ...register('model') }
          type="text"
        />
        <span>{errors.model && errors.model.message}</span>
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input
          { ...register('color') }
          type="text"
        />
        <span>{errors.color && errors.color.message}</span>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          { ...register('price', {
            setValueAs: (value) => parseFloat(value),
          }) }
          type="number"
          step="any"
        />
        <span>{errors.price && errors.price.message}</span>
      </div>
      <button
        disabled={ isSubmitting }
        type="submit"
      >
        {isSubmitting ? 'Editing ...' : 'Edit Product'}
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
