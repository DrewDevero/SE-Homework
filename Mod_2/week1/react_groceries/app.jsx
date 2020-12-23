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
            <div style={this.state.centerSpacing}>
                <Header generalStyling={this.state.generalStyling} headerStyle={this.state.headerStyle}/>
                <Grid generalStyling={this.state.generalStyling} flexCenter={this.state.flexCenter} gridSpacing={this.state.gridSpacing} />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
)