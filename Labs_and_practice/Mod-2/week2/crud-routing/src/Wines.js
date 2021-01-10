import React from "react";
import axios from "axios";

const WINES_URL = 'http://myapi-profstream.herokuapp.com/api/bd8bee/wines'

class Wines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.selectWine = this.selectWine.bind(this);
    this.editWine = this.editWine.bind(this);
    this.submitEditedWine = this.submitEditedWine(this);
  }

  async getWines() {
    try {
      const res = await axios.get(`${WINES_URL}?_limit=10`);
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
  selectWine(selectedWine) {
    this.setState({ selectedWine })
    console.log(selectedWine);
  }

  editWine(e) {
    const {name, value} = e.target;
    this.setState({...this.state, selectedWine: {...this.state.selectedWine, [name]: value} })
  }

  async submitEditedWine() {
    try {
      const editedWine = this.state.selectedWine; // this obj has an id
      console.log(editedWine) // to send our patch to url + /:id
      const focusWine = WINES_URL + editedWine.id
      await axios.patch(focusWine, editedWine);
      const resRefresh = await axios.get(WINES_URL);
      this.setState({ wines : resRefresh.data })
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Patch attempt to wines made")
    }
  }

  render() {
    return (
      <div className="wines">
        <ul className="gridSpacing">
          {/* render info */}
          {
            this.state.wines && this.state.wines.map((wine, index) => (
              <li className={ `item${index.toString()}` } key={ wine.id } id={ wine.id }><div>
                { wine.name }: price { wine.price }</div>
                <button onClick={ () => this.handleDelete(wine.id) }>Delete wine</button>
                <button onClick={ () => this.selectWine(wine) }>Edit wine</button>
              </li>
              ))
          }
        </ul>
        <form className="new-wine-form"
          onChange={ ()=> this.handleChange }
          onSubmit={ () => this.handleSubmit }
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

        <hr/>
      {
        this.state.selectedWine && <form className="wine-edit-form" onChange={ () => this.editWine } onSubmit={ () => this.submitEditedWine }>
          <label>
            Wine Name:
            <input type="text" name="name" defaultValue={ this.state.selectedWine.name } />
          </label><br></br>
          <label>
            Year wine was made:
            <input type="text" name="year" defaultValue={ this.state.selectedWine.year } />
          </label><br></br>
          <label>
            Grapes used:
            <input type="text" name="grapes" defaultValue={ this.state.selectedWine.grapes } />
          </label><br></br>
          <label>
            Country of wine:
            <input type="text" name="country" defaultValue={ this.state.selectedWine.country } />
          </label><br></br>
          <label>
            Wine Region:
            <input type="text" name="region" defaultValue={ this.state.selectedWine.region } />
          </label><br></br>
          <label>
            Description of wine:
            <input type="text" name="description" defaultValue={ this.state.selectedWine.description } />
          </label><br></br>
          <label>
            Picture url:
            <input type="text" name="picture" defaultValue={ this.state.selectedWine.picture }/>
          </label><br></br>
          <label>
            Price:
            <input type="text" name="price" defaultValue={ this.state.selectedWine.price }/>
          </label><br></br>
          <input type="submit"/>
        </form>
      }
    </div>
    )
  }
}

export default Wines;