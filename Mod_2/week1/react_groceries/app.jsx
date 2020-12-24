class App extends React.Component {
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
        this.styles = {
            centerSpacing: {
                textAlign: "center",
            },
            generalStyling:  {
            margin: "1rem",
            padding: "1rem",
            boxSizing: "border-box",
            color: "black",
            fontFamily: "Georgia"
            },
            headerStyle: {
                color: "white",
                backgroundColor: "rgba(0, 189, 0, 0.75)",
                padding: "2rem",
                fontSize: "2rem",
                textTransform: "capitalize",
            },
            flexCenter: {
                display : "flex",
                justifyContent : "center",
            },
            gridSpacing: {
                display: "grid",
            },
        }
    }
    render() {
        return(
            <div style={this.styles.centerSpacing}>
                <Header styles={this.styles}/>
                <Grid styles={this.styles} />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
)