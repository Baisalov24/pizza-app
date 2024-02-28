import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories  />
              <Sort />
            </div>
            <h2 className="content__title">All Pizzas</h2>
            <div className="content__items">
              <PizzaBlock price = {15} pizzaName = "Cheeseburger pizza" />
              <PizzaBlock price = {25} pizzaName = "Veggie pizza"/>
              <PizzaBlock price = {20} pizzaName = "Mashroom pizza"/>
              <PizzaBlock price = {24} pizzaName = "Mashroom pizza"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
