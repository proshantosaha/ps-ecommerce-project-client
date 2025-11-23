import React from "react";

const ShopFiltering = ({
  filters,
  filterState,
  setFilterState,
  clearFilters,
}) => {
  return (
    <div className="space-y-5 flex-shrink-0 w-full md:w-1/4 p-4 border border-gray-300 rounded  bg-[var(--color-primary-light)] ">
      <h3>Filters</h3>
      <div className="flex flex-col space-y-5">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        <ul>
          {filters[0].categories.map((category) => (
            <li key={category}>
              <label className="capitalize cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filterState.category === category}
                  onChange={(e) =>
                    setFilterState({ ...filterState, category: e.target.value })
                  }
                />
                <span className="ml-2">{category}</span>
              </label>
            </li>
          ))}
        </ul>

        <ul>
          {filters[0].colors.map((color) => (
            <li key={color}>
              <label className="capitalize cursor-pointer">
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={filterState.color === color}
                  onChange={(e) =>
                    setFilterState({ ...filterState, color: e.target.value })
                  }
                />
                <span className="ml-2">{color}</span>
              </label>
            </li>
          ))}
        </ul>

        <ul>
          {filters[0].priceRange.map((range) => (
            <li key={range.label}>
              <label className="capitalize cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={`${range.min}-${range.max}`}
                  checked={
                    filterState.priceRange === `${range.min}-${range.max}`
                  }
                  onChange={(e) =>
                    setFilterState({
                      ...filterState,
                      priceRange: e.target.value,
                    })
                  }
                />
                <span className="ml-2">{range.label}</span>
              </label>
            </li>
          ))}
        </ul>

        <button
          onClick={clearFilters}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default ShopFiltering;
