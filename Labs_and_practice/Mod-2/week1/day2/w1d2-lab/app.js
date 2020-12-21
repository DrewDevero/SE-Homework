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
  paid: true
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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receipt1 : receipt1,
            receipt2 : receipt2,
            receipt3 : receipt3
        }
    }

    render() {
        return (
            <div>
                <h1>Korrila React Receipts</h1>
                <ul>
                    <li>{
                        this.state.receipt1
                    }</li>
                </ul>
               
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
)