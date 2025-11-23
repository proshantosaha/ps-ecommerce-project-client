import React from "react";
import dealsImg from "../../assets/deals.png";

const DealSection = () => {
  return (
    <section className="section__container flex flex-col md:grid md:grid-cols-2 items-center gap-8 p-10 bg-[var(--color-primary-light)] rounded-xl  mx-auto">
      
      {/* Image */}
      <div className="relative flex justify-center">
        <img
          src={dealsImg}
          alt="Deals"
          className="max-w-[500px] md:max-w-[550px] drop-shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="text-center md:text-left space-y-4">
        <h5 className="text-[var(--color-primary)] font-medium">Get Up To 20% Discount</h5>
        <h4 className="text-3xl md:text-4xl font-extrabold font-[var(--header-font)] gradient-text">
          Deals Of This Month
        </h4>
        <p className="text-[var(--color-para-text)] leading-relaxed">
          Our Women's Fashion Deals of the Month are here to make your style
          dreams a reality without breaking the bank. Discover a curated
          collection of exquisite clothing, accessories, and footwear — all
          handpicked to elevate your wardrobe.
        </p>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          {["14 Days", "20 Hours", "15 Mins", "05 Secs"].map((item, i) => {
            const [num, label] = item.split(" ");
            return (
              <div
                key={i}
                className="w-20 h-20 bg-[var(--white)] rounded-full shadow-md flex flex-col items-center justify-center"
              >
                <h4 className="text-xl font-bold text-[var(--color-text-dark)]">{num}</h4>
                <p className="text-sm text-[var(--color-text-light)]">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DealSection;
