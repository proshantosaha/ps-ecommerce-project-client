import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useDispatch } from "react-redux";
import { useFetchProductbyIdQuery } from "../../../redux/features/products/productApi";
import RatingStars from "../../../components/RatingStars";
import ReviewsCard from "../reviews/ReviewsCard";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: { data: productDetails } = {},
    isLoading,
    isError,
  } = useFetchProductbyIdQuery(id);

  const { product, reviews } = productDetails || {};

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="flex items-center justify-center h-96 text-lg text-red-500">
        Error loading product details
      </div>
    );
  if (!product)
    return (
      <div className="flex items-center justify-center h-96 text-gray-600 text-lg">
        Product not found
      </div>
    );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {/* Banner */}
      <section className="section__container rounded bg-amber-100">
        <h2 className="section__header">Single Product Page</h2>
        <div className="flex items-center justify-center space-x-2 mt-2 text-gray-600 text-sm">
          <Link to="/" className="hover:text-rose-500">
            home
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <Link to="/shop" className="hover:text-rose-500">
            shop
          </Link>
          <i className="ri-arrow-right-s-line"></i>
          <span className="text-gray-800 font-medium">{product?.name}</span>
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-6xl mx-auto mt-12 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={product?.image || "/placeholder.jpg"}
                alt={product?.name || "Product image"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-900 mb-3">
              {product?.name}
            </h3>
            <p className="text-2xl text-rose-600 font-semibold mb-4">
              ${product?.price}{" "}
              {product?.oldPrice && (
                <s className="text-gray-400 ml-2">${product?.oldPrice}</s>
              )}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product?.description}
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium text-gray-800">Category:</span>{" "}
                {product?.category}
              </p>
              <p>
                <span className="font-medium text-gray-800">Color:</span>{" "}
                {product?.color}
              </p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-800">Rating:</span>
                <RatingStars rating={product?.rating} />
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-fit px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-md transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* reviews  */}
      <section className="section__container mt-8">
        <ReviewsCard productReviews={reviews} />
      </section>
    </>
  );
};

export default SingleProduct;
