import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzasData from "./assets/pizzas.json"

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
           {pizzasData.map((item, index) => 
             <PizzaBlock
             key ={item.id}
             price = {item.price} 
             title = {item.title}
             imageUrl = {item.imageUrl}
             sizes = {item.sizes}
             types = {item.types}

             />)} 
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
