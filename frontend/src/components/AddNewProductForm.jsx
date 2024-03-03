import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import zProductSchema from '../schemas/product.zschema';
import useCreateProduct from '../hooks/useCreateProduct';

export default function AddNewProductForm() {
  const { setAllProducts } = useContext(ProductsContext);
  const { createProduct } = useCreateProduct();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(zProductSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await createProduct(data);
      const createdProduct = response.data;
      setAllProducts((prev) => [...prev, createdProduct]);
      reset();
    } catch (error) {
      window.location.reload();
      setError('root', {
        type: 'custom',
        message: error.response.data.message,
      });
    }
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <div>
        <label htmlFor="name">Name</label>
        <input
          { ...register('name') }
          type="text"
          id="name"
        />
        <span>{errors.name && errors.name.message}</span>
      </div>
      <div>
        <label htmlFor="brand">brand</label>
        <input
          { ...register('brand') }
          type="text"
          id="brand"
        />
        <span>{errors.brand && errors.brand.message}</span>
      </div>
      <div>
        <label htmlFor="model">model</label>
        <input
          { ...register('model') }
          type="text"
          id="model"
        />
        <span>{errors.model && errors.model.message}</span>
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <input
          { ...register('color') }
          type="text"
          id="color"
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
          id="price"
        />
        <span>{errors.price && errors.price.message}</span>
      </div>
      <button
        disabled={ isSubmitting }
        type="submit"
      >
        {isSubmitting ? 'Creating ...' : 'Create Product'}
      </button>
      <p>{errors.root && errors.root.message}</p>
    </form>
  );
}
