/* import Products from "./data"; */

console.log(products);

class App extends React.Component {
    constructor(props) {
    super(props);
    }
    state = {
        products: products,
        name: '',
        price: 0,
        description: 'Describe this item'
      }

      handleChange = (event) =>{
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
          products: [ newItem, ...this.state.products],
          name: '',
          price: 0,
          description: 'Describe this item'
        })
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
            <div>
                <h2>Preview our new item</h2>
                <h3>{this.state.name}</h3>
                <h4>{this.state.price}</h4>
                <h5>{this.state.description}</h5>
            </div>
            <div className="products">
                <ul>
                {this.state.products.map(product => {
                    console.log(product)
                return (
                    /*<li>{product.name} {product.price}</li> */
                    <ProductList product={product}/> )}
                )
                }
                </ul>
            </div>
            <div className="cart">
                <h3>Shoppping Cart</h3>
                <ul></ul>
            </div>
          </div>
        )
      }
}
 class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inShoppingCart: false
        }
        this.toggleCart = this.toggleCart.bind(this)
    }

    toggleCart() {
        this.setState({ inShoppingCart: !this.state.inShoppingCart })
    }
    render() {
        return (
            <li onClick={this.toggleCart}>{this.props.product.name}  {this.props.product.price} {this.state.inShoppingCart ? <span>is in the shopping cart</span> : ""}</li>
        )
    }  
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>{this.products.name} {this.products.price}</li>
        )
    }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

// App.js - App component - unidirectional data flow
// Lift state
// product props to productList component //we want to give ShoppingCart Component info
// ProductList component - keeps track of shopping cart // ShoppingCart coponent - also needs shopping cart info