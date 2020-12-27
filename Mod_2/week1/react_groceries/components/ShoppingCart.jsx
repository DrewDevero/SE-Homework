class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={this.props.styles.shoppingCartDiv}>
                <button id="shoppingCart" type="button" style={this.props.styles.shoppingCartStyle}>Shopping Cart</button>
            </div>
        )
    }
}