import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import "./App.css";

const BASE_URL = 'https://swapi.dev/api/' // + /people /planets /starships

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // make an API call for both people and starships
  // set them both to state
  async getPlanets() {
    try {
      const res = await axios.get(BASE_URL + 'planets');
      this.setState({ planets: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  async getStarships() {
    try {
      const res = await axios.get(BASE_URL + 'starships');
      this.setState({ starships: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPlanets();
    this.getStarships();
  }
  render() {
    return (
      <div>
      <div className="gridSpacing">
      <div className="p1">
      star
      </div>
<div className="p2">
      wars
      </div>
      </div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/people">people</Link>
              </li>
              <li>
                <Link to="/planets">planets</Link>
              </li>
              <li>
                <Link to="/vehicles">vehicles</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/planets">
              <Planets />
            </Route>
            <Route path="/vehicles"> 
              <Vehicles />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
  );
  }
}
function Home() {
  return (
    <div>
      <h1>Home component</h1>
    </div>
  )
}

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async getPeople() {
    try {
      const res = await axios.get(BASE_URL + 'people');
      this.setState({ people: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPeople();
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.people && this.state.people.results.map((person, index) => {
              console.log(person)
              return (
                <div className="phaseIn" key={index}>
                  <h1>Persons name: { person.name }</h1>
                  <h2>Persons height: { person.height }</h2>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function About() {
  return <h2>About</h2>;
}

class Planets extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
  async getPlanets() {
    try {
      const res = await axios.get(BASE_URL + "planets");
      this.setState({planets : res.data})
    } catch(err) {
      console.log(err);
    } finally {
      console.log("was the attempt to receive planet data successful?");
    }
  }

  componentDidMount() {
      this.getPlanets();
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.state.planets && this.state.planets.results.map((planet, index) => {
              console.log(planet);
              return(
                <div className="phaseIn" key={ index }>
                  <h1>Planet Name: { planet.name }</h1> 
                  <h2>Planet Terrain: { planet.terrain }</h2>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class Vehicles extends React.Component {
   constructor(props) {
      super(props);
        this.state = {}
   }
    async getVehicles() {
      try {
          const res = await axios.get(BASE_URL + 'vehicles')
          this.setState({vehicles : res.data})
      } catch(err) {
          console.log(err);
      } finally {
          console.log("Was the vehicle api call successful?");
      }
    }
    componentDidMount() {
      this.getVehicles();
    }
    render() {
    return (
      <div>
        <ul>
          {
            this.state.vehicles && this.state.vehicles.results.map((vehicle, index) => {
              console.log(vehicle)
              return (
                <div className="phaseIn" key={ index }>
                  <h1>Vehicle name: { vehicle.name }</h1>
                  <h2>Vehicle Manufacturer: { vehicle.manufacturer }</h2>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
/* function Users() {
  return <h2>Users</h2>;
} */