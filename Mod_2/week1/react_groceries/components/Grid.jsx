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
            <div>
            <main style={this.props.styles.flexCenter}>
                <div>
                    <article style={this.props.styles.gridSpacing}>
{/*map over grocery list items from groceryList.js*/}
                    {groceryItems.map((product, index) => {
                        const handleSubmit = event => {
                            event.preventDefault();
                            let userInput = 0;
{/*if input is greater than 0 use the input */}
                                parseInt(document.getElementsByClassName("userInput")[index].value) >= 0 ? 
                                    userInput += parseInt(document.getElementsByClassName("userInput")[index].value) 
                                : 
                                    "";
{/* If quatity of groceryList.js is greater than 0 then */}
{/* If purchased is false, then turn state isPurchased to true and remove 1 from groceryList.js quantity and show in shopping cart*/}
{/* Else, remove 1 from groceryList.js quantity and show in shopping cart*/}
                            const SHOPPING_CART = document.getElementById("shoppingCart");
                            if(product.quantity > 0 && userInput > 0 && userInput <= product.quantity) {
                                !this.state.isPurchased ?  
                                    (this.setState({item : product.item, quantity : this.state.quantity + userInput, units : this.state.units - 1, isPurchased : true}, () => {
                                        SHOPPING_CART.innerText = `Item: ${product.item}\nQuantity: ${this.state.quantity.toString()}`, console.log("foo", this.state, userInput)
                                        }
                                    ),
                                    product.quantity -= userInput
                                    )
                                :
                                    (this.setState({item : product.item, quantity : this.state.quantity + userInput, units : this.state.units - 1}, () => {
                                        SHOPPING_CART.innerText = `Item: ${product.item}\nQuantity: ${this.state.quantity.toString()}`, console.log("bar", this.state, userInput);
                                        }
                                    ),
                                    product.quantity -= userInput
                                    )    
                            } else {
                                "";
                            }
                        }   
                        if(!product.isPurchased) {
                            return(
                                <div key={product.id}>
                                    <h2 style={this.props.styles[index]}>Sold Out</h2>
                                    <div style={this.props.styles.noDisplay}>
                                        <input className="userInput" style={this.props.styles.inputStyle} type="text" placeholder="Add how many to cart?"></input><button type="submit" style={this.props.styles.buttonStyle} onClick={handleSubmit}>Add to cart</button>
                                    </div>
                                </div>
                            )
                        } else {
                            return(
                                <ul key={product.id} style={this.props.styles[index]}>
                                    <h2>
                                    <li>{product.item}</li>
                                    <li>{product.brand}</li>
                                    <li>Units: {product.units}</li>
                                    <li>Quantity: {product.quantity}</li>
                                    <input className="userInput" style={this.props.styles.inputStyle} type="text" placeholder="Add how many to cart?"></input><button type="submit" style={this.props.styles.buttonStyle} onClick={handleSubmit}>Add to cart</button>
                                    </h2>
                                </ul>
                            )
                        }
                    })}
                    </article>
                </div>
            </main>
                <Remove {...this.state} />
            </div>
        )
    }
}
