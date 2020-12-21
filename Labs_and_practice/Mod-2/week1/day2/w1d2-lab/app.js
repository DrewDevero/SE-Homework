const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}

for (let item in receipt1) { 
        console.log(receipt1[item])
    }

let arrayOfReceipts = [receipt1, receipt2, receipt3];

const FLEX_STYLE = {
    display : "flex",
    justifyContent : "space-around"
}
const RECEIPT_STYLE = {
    margin : "1rem",
    padding : "1rem",
    border : "solid 0.25rem green"
}

class Receipt extends React.Component {
    render() {
        console.log(this.props.receipt.paid)
        /* function toggle() {
            if(this.props.receipt.paid === false) {
                return this.props.receipt.paid = true
            } else {
                return this.props.receipt.paid = false
            }
        } */
        return (
            <div style={RECEIPT_STYLE}>
                <h2>{this.props.receipt.person}</h2> 
                <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
                <h5><span>Protein: </span>{this.props.receipt.order.protein}</h5>
                <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
                <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
                <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
                <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
                <button type="button" /* onclick={toggle()} */>Toggle Paid</button>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /* receipt1 : receipt1,
            receipt2 : receipt2,
            receipt3 : receipt3 */
            receipts : arrayOfReceipts
        }
    }

    render() {
        return (
            <div>
                <h1>Korrila React Receipts</h1>
                <div style={FLEX_STYLE}>
                {/* {this.state.receipt1.paid ? "" : <Receipt receipt={this.state.receipt1} />}
                {this.state.receipt2.paid ? "" : <Receipt receipt={this.state.receipt2} />}
                {this.state.receipt3.paid ? "" : <Receipt receipt={this.state.receipt3} />}   */}
                {this.state.receipts.map(item => item.paid ? "" : <Receipt receipt={item} />)}
                </div>                            
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
)