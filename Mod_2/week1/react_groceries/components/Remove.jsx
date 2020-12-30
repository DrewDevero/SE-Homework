class Remove extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        groceryItems.map(item => {
            const REMOVE_ITEM = document.getElementById("removeItem")
            REMOVE_ITEM.addEventListener("click", () => {
                item.isPurchased ?
                    (item.isPurchased = false,
                    console.log(item.isPurchased))
                :
                    (item.isPurchased = true,
                    console.log(item.isPurchased))
            })
        })
    };
    render() {
        return (
            <div style={this.props.styles.shoppingCartDiv}>
                <button id="removeItem" type="submit" style={this.props.styles.shoppingCartStyle}>Remove</button>
            </div>
        )
    }
}
