import PropTypes from 'prop-types';

export default function FilterProducts({ onFilterChange, onCategoryChange }) {
  return (
    <div
      className="flex flex-col justify-center items-center border rounded-lg mt-3 mx-5
      p-5"
    >
      <h2 className="text-lg font-medium mb-3">Filter Products</h2>
      <div className="flex justify-center">
        <input
          className="py-1 px-2 border border-gray-300 rounded outline-none"
          type="text"
          placeholder="Enter filter"
          onChange={ (e) => onFilterChange(e.target.value) }
        />
        <select
          className="ml-2 py-1 border rounded-md"
          onChange={ (e) => onCategoryChange(e.target.value) }
        >
          <option value="name">Name</option>
          <option value="brand">Brand</option>
          <option value="model">Model</option>
          <option value="color">Color</option>
        </select>
      </div>
    </div>
  );
}

FilterProducts.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
