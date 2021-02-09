import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mexican">Mexican Food</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/create">Create Food</Link>
            </li>
            <li>
              <Link to="/update">Update Food</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mexican">
            <Mexican />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>Hello there! If you're interested in food from around the world. Click the category of foods you're interested in.</h1>
    </div>
  )
}
function Mexican() {
  // this.state = {} // we fill in later w/ class components
  const [mexfood, setMexfood] = useState(null);
  // ^^
    // this.state = { mexfood: null };
  // setMexfood gives us functionality equal to this.setState({ mexfood: value });
  async function getMexicanDishes() {
    try {
      const res = await axios.get('http://localhost:8080/mexican');
      console.log(res.data); // 3 obj
      setMexfood(res.data);
      // equivalent to this.setState({ mexfood: res.data });
    } catch(e) {
      console.error(e, e.message);
    }
  }
  // acts the same as a component did mount
    // notice the square brackets
  useEffect(() => {
    getMexicanDishes();
  }, [])
  return (
    <div>
      <header>
        { mexfood && mexfood.map(dish => {
          return (
            <div>
              <h2>{ dish.dishName }</h2>
              <h4>{ dish.spicy ? "it is spicy" : "it is not spicy" }</h4>
            </div>
          );
        })}
      </header>
    </div>
  )
}
function About() {
  return (
    <div>
      <h2>This is our first full stack application with the 2020-21-NY cohort!</h2>
    </div>
  )
}

function Create() {
  // dishName
  // vegetarian
  // spicy
  // protein
  const [form, setForm] = useState(null);

  function handleChange(e) {
      const { name, value } = e.target;
      setForm({...form, [name] : value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/mexican", form)
      .then(res => console.log(res))
      .catch(e => console.error(e));
  }

  return (
    <form onChange={ (e) => handleChange(e)} onSubmit= { (e) => handleSubmit(e) }>
  <label>
    Dish Name:
      <input type="text" name="dishName" />
  </label>
  <label>
    Vegetarian:
      <input type="text" name="vegetarian" />  
  </label>
  <label>
    Spicy:
      <input type="text" name="spicy" />
  </label>
  <label>
    Protein:
      <input type="text" name="protein" />
  </label>
      <input type="submit" />
    </form>
  )
}

  function Update() {

      const [part, setPart] = useState(null);

      function handleUpdate(e) {
        const {name, value} = e.target;
        setPart({ ...part, [name] : value });
      }

      function handleSubmit(e) {
        axios.patch("https://localhost:8080/mexican", part)
          .then(res => console.log(res))
          .catch(err => console.error(err));
      }

      function deleteDish(e) {
        axios.delete("http://localhost:8080/mexican", part)
          .then(res => console.log(res))
          .catch(err => console.error(err));
  }

      return(
        <form onChange={ (e) => handleUpdate(e) } onSubmit={ (e) => handleSubmit(e) }>
          <label>
            Dish name
            <input type="text" name="dishName" />
          </label>
          <label>
            vegetarian
            <input type="text" name="vegetarian" />
          </label>
          <label>
            Spicy
            <input type="text" name="spicy" />
          </label>
          <label>
            Protein
            <input type="text" name="protein" />
          </label>
          <input type="submit" />
          <input type="button" value="Delete Dish"onClick={ (e) => deleteDish(e) } />
        </form>
      )
  }

export default App;
