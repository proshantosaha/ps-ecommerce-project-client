import React from "react";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
const Trends = () => {
  const trendData = [
    { id: 1, img: card1, title: "Womens Shirt", tag: "2025 Trend" },
    { id: 2, img: card2, title: "Womens Dresses", tag: "2025 Trend" },
    { id: 3, img: card3, title: "Womens Casuals", tag: "2025 Trend" },
  ];
  return (
    <section className="section__container hero__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {" "}
      {trendData.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-md"
        >
          {" "}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-md"
          />{" "}
          <div className="absolute bottom-5 w-50 h-40 left-32 md:left-50 bg-white/80 p-4 rounded-lg backdrop-blur-sm">
            {" "}
            <p className="text-sm font-medium text-primary">{item.tag}</p>{" "}
            <h4 className="mb-4 text-lg font-extrabold font-serif text-text-dark">
              {item.title}
            </h4>{" "}
            <a
              href="#"
              className="text-text-dark underline font-medium hover:text-primary transition"
            >
              {" "}
              Discover More +{" "}
            </a>{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </section>
  );
};
export default Trends;
