import React from "react";

const RatingStars = ({rating}) => {

    const stars = []

  for (let i = 1; i <= 5; i++) {
   stars.push(<span key={i} className={`ri-star${i <= rating ? '-fill' : ""}`}></span>)
    
  }

  return (
    <div class="product__rating">
      {stars}
    </div>
  );
};

export default RatingStars;
