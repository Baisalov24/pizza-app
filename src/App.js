import React, { useState } from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    fetch("https://65e0e5e8d3db23f7624a4181.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setIsLoading(false);
      })
      
  }, []);

  console.log(allData);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All Pizzas</h2>
            <div className="content__items">
             
              {isLoading
                ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                : allData.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
