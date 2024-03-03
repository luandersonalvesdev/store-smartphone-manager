import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import zProductSchema from '../schemas/product.zschema';
import useCreateProduct from '../hooks/useCreateProduct';

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
      // reset();
    } catch (error) {
      window.location.reload();
      setError('root', {
        type: 'custom',
        message: error.response.data.message,
      });
    }
  };

  const isButtonDisabled = Object.keys(errors).length > 0 || isSubmitting;

  return (
    <div className="mt-6 mx-5 p-5 flex flex-col border rounded-lg">
      <h2 className="text-3xl font-semibold mb-10 text-center block">Create Product</h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={ handleSubmit(onSubmit) }
      >
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <div>
            <label
              className="block mb-1 text-base opacity-50"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="max-w-52 py-1 px-2 border border-gray-300 rounded outline-none
            placeholder:text-red-300"
              { ...register('name') }
              type="text"
              id="name"
              placeholder={ errors.name && errors.name.message }
            />
          </div>
          <div>
            <label
              className="block mb-1 text-base opacity-50"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="max-w-52 py-1 px-2 border border-gray-300 rounded outline-none
            placeholder:text-red-300"
              { ...register('brand') }
              type="text"
              id="brand"
              placeholder={ errors.brand && errors.brand.message }
            />
          </div>
          <div>
            <label
              className="block mb-1 text-base opacity-50"
              htmlFor="model"
            >
              Model
            </label>
            <input
              className="max-w-52 py-1 px-2 border border-gray-300 rounded outline-none
            placeholder:text-red-300"
              { ...register('model') }
              type="text"
              id="model"
              placeholder={ errors.model && errors.model.message }
            />
          </div>
          <div>
            <label
              className="block mb-1 text-base opacity-50"
              htmlFor="color"
            >
              Color
            </label>
            <input
              className="max-w-52 py-1 px-2 border border-gray-300 rounded outline-none
            placeholder:text-red-300"
              { ...register('color') }
              type="text"
              id="color"
              placeholder={ errors.color && errors.color.message }
            />
          </div>
          <div>
            <label
              className="block mb-1 text-base opacity-50"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="max-w-52 py-1 px-2 border border-gray-300 rounded outline-none
            placeholder:text-red-300"
              { ...register('price', {
                setValueAs: (value) => parseFloat(value),
              }) }
              type="number"
              step="any"
              id="price"
              placeholder={ errors.price && errors.price.message }
            />
            <span />
          </div>
        </div>
        <p>{errors.root && errors.root.message}</p>
        <button
          className="bg-green-300 hover:brightness-105 py-2 px-5 rounded
          duration-300 text-black font-semibold mt-6 cursor-pointer
          disabled:cursor-not-allowed disabled:opacity-40"
          disabled={ isButtonDisabled }
          type="submit"
        >
          {isSubmitting ? 'Creating ...' : 'Create Product'}
        </button>
      </form>
    </div>
  );
}
