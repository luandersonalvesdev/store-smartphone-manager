import PropTypes from 'prop-types';
import { useState } from 'react';
import UpdateProductForm from './UpdateProductForm';
import DeleteProduct from './DeleteProduct';

export default function ProductDetails(
  { product: { name, brand, color, model, price, id } },
) {
  const [isEditing, setEditing] = useState(false);

  return (
    <div>
      {
        isEditing
          ? (
            <UpdateProductForm
              product={ { name, brand, color, model, price, id } }
              setEditing={ setEditing }
            />
          )
          : (
            <div className="overflow-hidden">
              <p className="font-semibold">{name}</p>
              <p className="text-sm">{brand}</p>
              <p className="text-sm">{model}</p>
              <p className="text-sm">{color}</p>
              <p
                className="bg-green-600 text-white rounded px-1 mt-3 block text-center"
              >
                {
                  `${price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}`
                }
              </p>
              <div className="flex flex-nowrap w-full">
                <button
                  className="border border-green-300 hover:bg-green-500 hover:text-white
                py-1 px-2 rounded duration-300 mr-1 text-green-500 mt-2 flex-1"
                  type="button"
                  onClick={ () => setEditing(true) }
                >
                  Edit
                </button>
                <DeleteProduct productId={ id } productName={ name } />
              </div>
            </div>
          )
      }
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
