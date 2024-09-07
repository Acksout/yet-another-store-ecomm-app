import React, { useState } from "react";

const Sidebar = () => {
  // State for filters and sort
  const [filters, setFilters] = useState({
    size: [],
    price: [0, 1000],
    brand: [],
  });
  const [sortBy, setSortBy] = useState("featured");

  // Filter options
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];
  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Newest",
  ];

  // Handle filter changes
  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  // Handle price range change
  const handlePriceChange = (e, index) => {
    const newPrice = [...filters.price];
    newPrice[index] = parseInt(e.target.value);
    setFilters((prev) => ({ ...prev, price: newPrice }));
  };

  return (
    <aside className="w-64 bg-white shadow-lg rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filters</h2>

      {/* Size filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleFilterChange("size", size)}
              className={`px-3 py-1 rounded-full text-sm font-medium 
                ${
                  filters.size.includes(size)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Price Range
        </h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={filters.price[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-20 px-2 py-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.price[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-20 px-2 py-1 border rounded"
          />
        </div>
      </div>

      {/* Brand filter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleFilterChange("brand", brand)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort by */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {sortOptions.map((option) => (
            <option
              key={option}
              value={option.toLowerCase().replace(/\s/g, "-")}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
