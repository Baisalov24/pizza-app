import React, { useState } from "react";

const Categories = ({value, onChangeCategory}) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  let categories = [
    "All pizzas",
    "Meat Lovers Pizza",
    "Veggie Pizza",
    "BBQ Chicken Pizza",
    "Mushroom Pizza",
  ];

  // function onClickCategory(index) {
  //   setActiveIndex(index);
  // }

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
