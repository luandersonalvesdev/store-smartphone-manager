import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import zProductSchema from '../schemas/product.zschema';
import useCreateProduct from '../hooks/useCreateProduct';
import LoadingSpinner from '../animations/LoadingSpinner';

const INPUT_CSS = `max-w-52 py-1 px-2 border border-gray-300 rounded outline-none
placeholder:text-red-300 placeholder:italic placeholder:text-opacity-85`;
const LABEL_CSS = 'block text-base opacity-50';

export default function CreateProductForm() {
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

  const isButtonDisabled = Object.keys(errors).filter((key) => key !== 'root').length > 0;

  return (
    <div className="mt-6 mx-5 p-5 flex flex-col border rounded-lg">
      <h2 className="text-3xl font-semibold mb-10 text-center block">Create Product</h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={ handleSubmit(onSubmit) }
      >
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <div>
            <label className={ LABEL_CSS } htmlFor="name">Name</label>
            <input
              className={ INPUT_CSS }
              { ...register('name') }
              type="text"
              id="name"
              placeholder={ errors.name?.message }
            />
          </div>
          <div>
            <label className={ LABEL_CSS } htmlFor="brand">Brand</label>
            <input
              className={ INPUT_CSS }
              { ...register('brand') }
              type="text"
              id="brand"
              placeholder={ errors.brand?.message }
            />
          </div>
          <div>
            <label className={ LABEL_CSS } htmlFor="model">Model</label>
            <input
              className={ INPUT_CSS }
              { ...register('model') }
              type="text"
              id="model"
              placeholder={ errors.model?.message }
            />
          </div>
          <div>
            <label className={ LABEL_CSS } htmlFor="color">Color</label>
            <input
              className={ INPUT_CSS }
              { ...register('color') }
              type="text"
              id="color"
              placeholder={ errors.color?.message }
            />
          </div>
          <div>
            <label className={ LABEL_CSS } htmlFor="price">Price</label>
            <input
              className={ INPUT_CSS }
              { ...register('price', {
                setValueAs: (value) => parseFloat(value),
              }) }
              type="number"
              step="any"
              id="price"
              placeholder={ errors.price?.message }
            />
            <span />
          </div>
        </div>
        <p>{errors.root && errors.root.message}</p>
        <button
          className="bg-gunmetal hover:brightness-105 py-2 px-5 rounded
          duration-300 text-white min-w-24 font-semibold mt-6 cursor-pointer
          disabled:cursor-not-allowed disabled:opacity-40"
          disabled={ isButtonDisabled }
          type="submit"
        >
          {isSubmitting ? <LoadingSpinner /> : 'Create'}
        </button>
      </form>
    </div>
  );
}
