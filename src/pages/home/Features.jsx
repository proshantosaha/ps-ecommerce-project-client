import React from "react";

const Features = () => {
  return (
    <section className="section__container banner__container">
      <div className="banner__card">
        <span>
          <i className="ri-truck-line"></i>
        </span>
        <h4>Free Delivery</h4>
        <p className="text-[var(--color-para-text)]">
          Offers convenience and the ability to shop from anywhere, anytime.
        </p>
      </div>

      <div className="banner__card">
        <span>
          <i className="ri-money-dollar-circle-line"></i>
        </span>
        <h4>100% Money Back Guarantee</h4>
        <p className="text-[var(--color-para-text)]">
          E-commerce platforms have a review system where customers can share
          feedback.
        </p>
      </div>

      <div className="banner__card">
        <span>
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4>Strong Support</h4>
        <p className="text-[var(--color-para-text)]">
          We offer customer support services to assist with queries and issues.
        </p>
      </div>
    </section>
  );
};

export default Features;
