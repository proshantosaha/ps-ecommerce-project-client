import React from "react";

const Blogs = () => {
  return (
    <section className="section__container blog__container">
      <h2 className="section__header  gradient-text">Latest From Blog</h2>
      <p className="section__subheader text-[var(--color-para-text)]">
        Elevate your wardrobe with our freshest style tips, trends, and
        inspiration on our blog.
      </p>

      <div className="md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="blog__card cursor-pointer hover:scale-105 transition-all duration-200">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Mastering the Art of Capsule Wardrobes"
          />
          <div className="blog__card__content">
            <h6>Timeless Elegance</h6>
            <h4 className="text-[var(--color-para-text)]">Mastering the Art of Capsule Wardrobes</h4>
            <p>12th August 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
