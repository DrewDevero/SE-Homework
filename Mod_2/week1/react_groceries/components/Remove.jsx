class Remove extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            removeButton : {
                margin: "0rem 1rem 1rem",
                padding: "1rem",
                outline: "none",
                border: "none",
                borderRadius : "50%",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
                backgroundColor: "rgba(255,14,14,0.75)",
                cursor: "pointer",
            }
        }
    }
    componentDidMount() {
        const REMOVE_ITEM = document.getElementById("removeItem")
        REMOVE_ITEM.addEventListener("click", (e) => {
            e.preventDefault();
            groceryItems.map(item => {
                if(item.isPurchased === true && this.props.item === item.item) {
                    (item.isPurchased = false,
                    console.log(item.isPurchased))
                } else if (item.isPurchased === false && this.props.item === item.item) {
                    (item.isPurchased = true,
                    console.log(item.isPurchased))
                }
            })
        })
    };
    render() {
        return (
            <div>
                <button id="removeItem" type="submit" style={this.styles.removeButton}>Remove</button>
            </div>
        )
    }
}
