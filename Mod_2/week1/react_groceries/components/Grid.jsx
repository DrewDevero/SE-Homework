class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                item: "",
                brand: "",
                units: "",
                quantity: 0,
                isPurchased: false
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
                            let userInput = 0;
                                parseInt(document.getElementsByClassName("userInput")[index].value) >= 0 ? 
                                    userInput += parseInt(document.getElementsByClassName("userInput")[index].value) 
                                : 
                                    "";
                                const SHOPPING_CART = document.getElementById("shoppingCart");
                            if(item.quantity > 0 && userInput > 0 && userInput <= item.quantity) {
                                !this.state.isPurchased ?  
                                    (this.setState({quantity : this.state.quantity + userInput, units : this.state.units - 1, isPurchased : true}, () => {
                                        SHOPPING_CART.innerText = `Item: ${item.item}\nQuantity: ${this.state.quantity.toString()}`, console.log("foo", this.state, userInput)
                                        }
                                    ),
                                    item.quantity--
                                    )
                                :
                                    (this.setState({quantity : this.state.quantity + userInput, units : this.state.units - 1}, () => {
                                        SHOPPING_CART.innerText = `Item: ${item.item}\nQuantity: ${this.state.quantity.toString()}`, console.log("bar", this.state, userInput);
                                        }
                                    ),
                                    item.quantity--
                                    )    
                            } else {
                                "";
                            }
                        }   
                        if(!item.isPurchased) {
                            return(
                                <div key={item.id}>
                                    <h2 style={this.props.styles[index]}>Sold Out</h2>
                                    <div style={this.props.styles.noDisplay}>
                                        <input className="userInput" style={this.props.styles.inputStyle} type="text" placeholder="Add how many to cart?"></input><button type="submit" style={this.props.styles.buttonStyle} onClick={handleSubmit}>Add to cart</button>
                                    </div>
                                </div>
                            )
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
                    </article>
                </div>
            </main>
        )
    }
}
