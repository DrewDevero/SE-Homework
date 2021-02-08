import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [mexFood, setMexFood] = useState(null);

  async function getMexDishes() {
    try {
      const res = await axios.get("http://localhost:8080/mexican");
      console.log(res.data);
      setMexFood(res.data);
    } catch(e) {
      console.error(e, e.message); 
    }
  }

  useEffect(() => {
    getMexDishes();
  }, [])

  return (
    <div className="App">
      {mexFood && mexFood.map((dish, index) => {
        return (
          <div key={index}>
            <h2>{ dish.dishName }</h2>
            <h4>{ dish.spicy ? "it is spicy" : "it is not spicy" }</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
