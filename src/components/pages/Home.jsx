import React, {useState} from "react";

import Categories from "../Categories";
import Sort from "../Sort";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("https://65e0e5e8d3db23f7624a4181.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">All Pizzas</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : allData.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
