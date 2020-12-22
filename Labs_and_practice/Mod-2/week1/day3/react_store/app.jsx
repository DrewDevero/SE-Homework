class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products: products, // variable from data.js
        name: '',
        price: 0,
        description: 'Describe this item',
        cartItems: []
      }
    this.addToCart = this.addToCart.bind(this);
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState({
      products: [newItem, ...this.state.products],
      name: '',
      price: 0,
      description: 'Describe this item'
    })
  }
  addToCart(item) {
    this.setState({ cartItems: [item, ...this.state.cartItems] });
  }
  render () {
    return (
      <div>
      <h1> Big Time Shopping </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' value={this.state.name} onChange={this.handleChange} id='name' placeholder='name of product' />
          <br />
          <label htmlFor='price'>Price</label>
          <input type='number' value={this.state.price} onChange={this.handleChange} id='price' />
          <br />
          <label htmlFor='description'>Description</label>
          <input type='textarea' value={this.state.description} onChange={this.handleChange} id='description' />
          <input type="submit" />
        </form>
        <div className="preview">
          <h2>Preview our new item</h2>
          <h3>{this.state.name}</h3>
          <h4>{this.state.price}</h4>
          <h5>{this.state.description}</h5>
        </div>
        <div className="products">
          <ul>
            {
            this.state.products.map(product => {
              // console.log(product);
              return (
                <ProductList product={ product }
                  handleAdd={ this.addToCart }
                />)} // <ProductList product={ { "name": "allen wrench", "price": 2.99, "description": "handy tool" } }
              )
            }
          </ul>
        </div>
        <div className="cart">
          <h3>shopping cart</h3>
          <ul>
            {
              this.state.cartItems.map(cartItem => <ProductList product={ cartItem } />)
            }
          </ul>
        </div>
      </div>
    )
  }
}
                // App.js - App component - unidirectinal data flow - from top down
          // product props to ProductList component               // we want to give ShoppingCart component info
// Productlist component - keeps track of shopping cart      // ShoppingCart component - also needs shopping cart info
/*
  [
    { firstName: "Angel", lastName: "Juarez", species: "human" },
    { firstName: "Katherine", lastName: "Juarez", species: "cat" }
    { firstName: "luke", lastName: "skywalker", species: 'human'}
  ].map(livingBeing => {
    return (
      <LivingOrganism organism={ livingBeing }  />
      // <li>{ livingBeing.firstName } is a: { livingBeing.species }</li>
    )
  })
*/
ReactDOM.render(<App />, document.getElementById('container'));