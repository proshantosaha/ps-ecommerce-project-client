import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ShopFiltering from "./ShopFiltering";
import Loading from "../../components/Loading";
import { useFetchAllProductsQuery } from "../../redux/features/products/productApi";

const filters = [
  {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
    priceRange: [
      { label: "Under $50", min: 0, max: 50 },
      { label: "$50 - $100", min: 50, max: 100 },
      { label: "$100 - $200", min: 100, max: 200 },
      { label: "$200 and above", min: 200, max: Infinity },
    ],
  },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  const { category, color, priceRange } = filterState;

  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  const {
    data: productsData = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(minPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productsPerPage,
  });

  console.log(productsData);

  if (isLoading) {
    return <Loading />;
  }

  if (error) return <p>Something went wrong</p>;

  const { products, totalProducts, totalPages } = productsData?.data || {};

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  const startProducts = (currentPage - 1) * productsPerPage + 1;
  const endProducts = startProducts + products.length - 1;

  return (
    <>
      <section className="section__container rounded bg-[var(--color-primary-light)]   ">
        <h2 className="section__header gradient-text">Shop page</h2>
        <p className="section__subheader text-[var(--color-para-text)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore
          quis necessitatibus molestiashic consequuntur !
        </p>
      </section>

      <section className="section__container ">
        <div className="flex flex-col md:flex-row md:gap-12 space-x-2">

         
          <ShopFiltering
            filters={filters}
            filterState={filterState}
            setFilterState={setFilterState}
            clearFilters={clearFilters}
          />
          <div className="bg-[var(--color-primary-light)] rounded-3xl p-6 flex-1">
            <h3 className="text-xl font-medium mb-4 ]">
              {" "}
              showing {startProducts} to {endProducts} of {totalProducts}{" "}
              products
            </h3>
            <ProductCard products={products} />

            {products.length > 0 && (
              <div className="mt-10 flex justify-center items-center gap-3 flex-wrap">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg font-medium border transition-all duration-200 ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
