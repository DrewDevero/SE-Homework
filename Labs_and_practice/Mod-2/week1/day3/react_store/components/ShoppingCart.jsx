class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{ this.props.product.name } { this.props.product.price }</li>
    )
  }
}
// let isPlayerOneTurn = false;
// function switchPlayer() {
//   isPlayerOneTurn = !isPlayerOneTurn
// }
// if(isPlayerOneTurn) {
//   // run player 1 code
// } else {
//   // player 2 code
// }