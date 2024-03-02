import PropTypes from 'prop-types';

export default function FilterProducts({ onFilterChange, onCategoryChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter filter"
        onChange={ (e) => onFilterChange(e.target.value) }
      />

      <select onChange={ (e) => onCategoryChange(e.target.value) }>
        <option value="name">Name</option>
        <option value="brand">Brand</option>
        <option value="model">Model</option>
        <option value="color">Color</option>
      </select>
    </div>
  );
}

FilterProducts.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
