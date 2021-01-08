import React from "react";
import axios from "axios";

const WINES_URL = 'http://myapi-profstream.herokuapp.com/api/bd8bee/wines'

class Wines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getWines() {
    try {
      const res = await axios.get(WINES_URL);
      //console.log(res.data)
      this.setState({ wines: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getWines();
  }

  handleChange(e){
    /*  DESTRUCTING >>
    e.target.name
    e.target.value */    
    const { name, value } = e.target;
    //console.log(name, value)
    this.setState( { [name]: value } )
  }

  async handleSubmit(e) {
    //console.log('something')
    /* DESTRUCTING >>
    this.state.name
    this.state.year
    this.state.grapes */
    e.preventDefault();
    const { name, year, grapes, country, region, description, picture, price } = this.state;
    const wine = { name, year, grapes, country, region, description, picture, price };
    try {
      const res = await axios.post(WINES_URL, wine);
      console.log(res.data);

      const updateRes = await axios.get(WINES_URL);
      this.setState( { wines: updateRes.data } )
    } catch(e) {
      console.error (e);
    }
    //console.log( { name, year, grapes, country, region, description, picture, price } );
    //const lastName = "wang";
    //console.log( { lastName })
    // const obj = { name: 'nicole', lastName: "wang" }
  }

  async handleDelete(id) {
    console.log(WINES_URL + id);
    try{
      const res = await axios.delete(WINES_URL + '/' + id); // target wine id
      console.log(res.data);

      const updateRes = await axios.get(WINES_URL);
      this.setState( { wines: updateRes.data } )
    } catch(e) {
      console.error(e.message)
    }
  }

  render() {
    return (
      <div className="wines">
        <ul>
          {/* render info */}
          {
            this.state.wines && this.state.wines.map(wine => (
              <li key={ wine.id }id={ wine.id }>
                { wine.name }: price { wine.price }
                <button onClick={ () => this.handleDelete(wine.id) }>Delete wine</button>
              </li>
              ))
          }
        </ul>
        <form className="new-wine-form"
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }
          >
          <label>
            Wine Name:
            <input type="text" name="name" />
          </label><br></br>
          <label>
            Year wine was made:
            <input type="text" name="year" />
          </label><br></br>
          <label>
            Grapes used:
            <input type="text" name="grapes" />
          </label><br></br>
          <label>
            Country of wine:
            <input type="text" name="country" />
          </label><br></br>
          <label>
            Wine Region:
            <input type="text" name="region" />
          </label><br></br>
          <label>
            Description of wine:
            <input type="text" name="description" />
          </label><br></br>
          <label>
            Picture url:
            <input type="text" name="picture" />
          </label><br></br>
          <label>
            Price:
            <input type="text" name="price" />
          </label><br></br>
          <input type="submit" />
        </form>
    </div>
    )
  }
}

export default Wines;