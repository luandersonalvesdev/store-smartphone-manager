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
            <div>
              <p>{name}</p>
              <p>{brand}</p>
              <p>{model}</p>
              <p>{color}</p>
              <p>{price}</p>
              <button type="button" onClick={ () => setEditing(true) }>Edit</button>
              <DeleteProduct productId={ id } />
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
