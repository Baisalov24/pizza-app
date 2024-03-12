import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams(); 
  const navigate = useNavigate();

  React.useEffect(() => { 
    async function fetchPizza() {
      try { 
        const { data } = await axios.get('https://65e0e5e8d3db23f7624a4181.mockapi.io/items' + id);
        setPizza(data);
      } catch (error) {
        alert("Error when receiving pizzas!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} $</h4>
    </div>
  );
};

export default FullPizza;
