import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let categories = [
    "All pizzas",
    "Meat Lovers Pizza",
    "Veggie Pizza",
    "BBQ Chicken Pizza",
    "Mushroom Pizza",
  ];

  function onClickCategory(index) {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
