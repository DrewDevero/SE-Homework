import React from "react";
import axios from "axios";

const WINES_URL = 'http://myapi-profstream.herokuapp.com/api/bd8bee/wines'

export default class Wines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  async getWines() {
    try {
      const res = await axios.get(WINES_URL);
      this.setState({ wines: res.data });
    } catch(err) {
      console.error(err);
    }
  }
  componentDidMount() {
    this.getWines();
  }
  handleChange(e) {
    const { name, value } = e.target;
    // e.target.name
    // e.target.value
    this.setState({ [name]: value })
  }
  async handleSubmit(e) {
    e.preventDefault();
    // this.state.name
    // this.state.year
    // this.state.grapes
    const { name, year, grapes, country, region, description, picture, price } = this.state;
    const wine = { name, year, grapes, country, region, description, picture, price };
    try {
      const res = await axios.post(WINES_URL, wine);
      console.log(res.data);
      const updateRes = await axios.get(WINES_URL);
      this.setState({ wines: updateRes.data });
    } catch(e) {
      console.error(e.message);
    }
  }
  async handleDelete(id) {
    try {
      const res = await axios.delete(WINES_URL + id); // target wine id
      console.log(res.data);
      const updateRes = await axios.get(WINES_URL);
      this.setState({ wines: updateRes.data });
    } catch(er) {
      console.error(er.message)
    }
  }
  render() {
    return (
      <div className="wines">
        <ul>
          {/* render info */}
          {
            this.state.wines && this.state.wines.map(wine => (
              <li key={wine.id}>
                { wine.name }: price { wine.price } <button onClick={ () => this.handleDelete(wine.id) }>Delete wine</button>
              </li>
            ))
          }
        </ul>
        <form className="new-wine-form"
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }>
          <label>
            Wine name:
            <input type="text" name="name" />
          </label>
          <label>
            Year wine was made:
            <input type="text" name="year" />
          </label>
          <label>
            Grapes used:
            <input type="text" name="grapes" />
          </label>
          <label>
            Country of wine:
            <input type="text" name="country" />
          </label>
          <label>
            Wine region:
            <input type="text" name="region" />
          </label>
          <label>
            Description of wine:
            <input type="text" name="description" />
          </label>
          <label>
            Picture url:
            <input type="text" name="picture" />
          </label>
          <label>
            Price:
            <input type="text" name="price" />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

