import React, { useState } from "react";
import products from "../../data/products.json"

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);


  const LoadMoreProducts = () =>{
        setVisibleProducts(preCount => preCount + 4)
  }

 
  return (
    <section className="section__container product__container bg-[var(--color-extra-light)] rounded-md p-6 mb-8">
      <h2 className="section__header gradient-text">Trending Products</h2>
      <p className="section__subheader text-[var(--color-para-text)] mb-12">
        Discover the Hottest Picks: Elevate Your Style with Our Curated
        Collection of Trending Women's Fashion Products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product__card">
            <div className="relative">
              <a href={product.link}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                />
              </a>
              <div className="absolute top-3 right-3">
                <button>
                  <i className="ri-shopping-cart-2-line bg-[var(--color-secondary)] p-1.5 text-white hover:bg-[var(--color-primary-dark)]"></i>
                </button>
              </div>
            </div>
            <div className="product__card__content">
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <div className="product__rating">
                <span className="ri-star-fill"></span>
                <span className="ri-star-fill"></span>
                <span className="ri-star-fill"></span>
                <span className="ri-star-fill"></span>
                <span className="ri-star-fill"></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="text-center mt-10">
          <button
            onClick={LoadMoreProducts}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingProducts;
