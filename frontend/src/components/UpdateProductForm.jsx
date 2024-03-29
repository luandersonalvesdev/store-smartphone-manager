import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import ProptTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ProductsContext } from '../contexts/ProductsContext';
import zProductSchema from '../schemas/product.zschema';
import useUpdateProduct from '../hooks/useUpdateProduct';
import LoadingSpinner from '../animations/LoadingSpinner';

const INPUT_CSS = `w-full py-1 px-2 border border-gray-300 rounded outline-none
placeholder:text-red-500 placeholder:italic placeholder:text-opacity-50`;

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

  const isButtonDisabled = Object.keys(errors).filter((key) => key !== 'root').length > 0;

  const onSubmit = async (data) => {
    try {
      const response = await updateProduct(data, id);
      setAllProducts((prev) => {
        const updatedProd = response.data;
        return prev.map((prod) => (prod.id === updatedProd.id ? updatedProd : prod));
      });
      toast.success(`${data.name} updated successfully!`);
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
      className="flex flex-col mt-2 gap-1"
      onSubmit={ handleSubmit(onSubmit) }
    >
      <div>
        <input
          className={ INPUT_CSS }
          { ...register('name') }
          type="text"
          placeholder={ errors.name?.message }
        />
      </div>
      <div>
        <input
          className={ INPUT_CSS }
          { ...register('brand') }
          type="text"
          placeholder={ errors.brand?.message }
        />
      </div>
      <div>
        <input
          className={ INPUT_CSS }
          { ...register('model') }
          type="text"
          placeholder={ errors.model?.message }
        />
      </div>
      <div>
        <input
          className={ INPUT_CSS }
          { ...register('color') }
          type="text"
          placeholder={ errors.color?.message }
        />
      </div>
      <div>
        <input
          className={ INPUT_CSS }
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
        rounded px-6 py-1 text-center text-wrap shadow-md w-full font-bold cursor-pointer
        disabled:cursor-not-allowed disabled:opacity-40"
        disabled={ isButtonDisabled || isSubmitting }
        type="submit"
      >
        {isSubmitting ? <LoadingSpinner /> : 'Save'}
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
