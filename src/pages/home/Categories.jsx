import React from "react";
import { Link } from "react-router-dom";
import category1 from "../../assets/category-1.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import category4 from "../../assets/category-4.jpg"


const Categories = () => {
// categoriesData.js
 const categories = [
  {
    id: 1,
    name: "Accessories",
    image: category1,
    path:"accessories"
  },
  {
    id: 2,
    name: "Dress Collection",
    image: category2,
    path: "dress",
  },
  {
    id: 3,
    name: "Jewellery",
    image: category3,
    path: "jewellery",
  },
  {
    id: 4,
    name: "Cosmetics",
    image: category4,
    path: "cosmetics",
  },
];


  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
      {categories.map((cat) => (
        <Link key={cat.id} className="categories__card " to={`/categories/${cat.path}`}>
          <img src={cat.image} alt={cat.name} />
          <h4>{cat.name}</h4>
        </Link>
      ))}
    </section>
  );
};

export default Categories;
