import PropTypes from 'prop-types';

export default function FilterProducts({ onFilterChange, onCategoryChange }) {
  return (
    <>
      <h2 className="text-xl font-bold mb-3">Filter Products</h2>
      <input
        className="py-1 max-w-40 px-2 border border-gray-300 rounded outline-none"
        type="text"
        placeholder="Enter filter"
        onChange={ (e) => onFilterChange(e.target.value) }
      />
      <select
        className="ml-2 py-1 h-9 px-1 bg-transparent border outline-none rounded-md"
        onChange={ (e) => onCategoryChange(e.target.value) }
      >
        <option value="name">Name</option>
        <option value="brand">Brand</option>
        <option value="model">Model</option>
        <option value="color">Color</option>
      </select>
    </>
  );
}

FilterProducts.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
