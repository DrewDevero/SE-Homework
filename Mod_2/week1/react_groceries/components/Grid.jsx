class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems : {
                item: "",
                brand: "",
                units: "",
                quantity: 0,
                isPurchased: false
            },
        }
    } 
    render() {
        return(
            <main style={this.props.styles.flexCenter}>
                <div>
                    <article style={this.props.styles.gridSpacing}>
                    {groceryItems.map((item, index) => {
                        const handleSubmit = event => {
                            event.preventDefault();
                            const USER_INPUT = parseInt(document.getElementsByClassName("userInput")[index].value);
                            const SHOPPING_CART = document.getElementById("shoppingCart");
                            !this.state.groceryItems.isPurchased ?  
                                ((this.setState({...this.state.groceryItmes, quantity : this.state.groceryItems.quantity + USER_INPUT, units : this.state.groceryItems.units - 1, isPurchased : true}), console.log("foo", this.state, USER_INPUT)),
                                SHOPPING_CART.innerText = `Item: ${item.item}\nQuantity: ${this.state.groceryItems.quantity.toString()}` 
                                ) :
                                /* (this.setState({isPurchased : false}), console.log("bar", this.state, USER_INPUT)) */
                                ((this.setState({...this.state.groceryItems, quantity : this.state.groceryItems.quantity + USER_INPUT, units : this.state.groceryItems.units - 1}), console.log("bar", this.state, USER_INPUT)), SHOPPING_CART.innerText = `Item: ${item.item}\nQuantity: ${this.state.groceryItems.quantity.toString()}`)
                        }   
                        if(!item.isPurchased) {
                            return(<h2 key={item.id} style={this.props.styles[index]}>Sold Out</h2>)
                        } else {
                            return(
                                <ul key={item.id} style={this.props.styles[index]}>
                                    <h2>
                                    <li>{item.item}</li>
                                    <li>{item.brand}</li>
                                    <li>Units: {item.units}</li>
                                    <li>Quantity: {item.quantity}</li>
                                    <input className="userInput" style={this.props.styles.inputStyle} type="text" placeholder="Add how many to cart?"></input><button type="submit" style={this.props.styles.buttonStyle} onClick={handleSubmit}>Add to cart</button>
                                    </h2>
                                </ul>
                            )
                        }
                    })}
                        {/* <h2 style={this.props.styles.item1}>{groceryItems[0].item}</h2>
                        <h2 style={this.props.styles.item2}>{groceryItems[1].item}</h2>
                        <h2 style={this.props.styles.item3}>{groceryItems[2].item}</h2> */}
                    </article>
                </div>
            </main>
        )
    }
}
