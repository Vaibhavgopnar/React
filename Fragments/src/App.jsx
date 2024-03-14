// import React from "react";     <React.Fragement>
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the list of healthy food are good for your health.</p>
      </Container> */}
    </>
  );
}

export default App;
