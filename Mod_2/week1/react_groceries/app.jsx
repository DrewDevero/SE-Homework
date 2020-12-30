class App extends React.Component {
    constructor(props) {
    super(props);
        this.styles = {
            noDisplay: {
                display : "none",
            },
            centerSpacing: {
                textAlign: "center",
            },
            generalStyling:  {
            margin: "1rem",
            padding: "1rem",
            boxSizing: "border-box",
            fontFamily: "Georgia",
            },
            inputStyle: {
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
                border: "none",
            },
            buttonStyle: {
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
                backgroundColor: "rgba(255,14,14,0.75)",
                cursor: "pointer",
                border: "none",
                outline: "none",
            },
            headerStyle: {
                color: "white",
                backgroundColor: "rgba(0, 189, 0, 0.75)",
                borderRadius: "8%",
                padding: "2rem",
                fontSize: "2rem",
                textTransform: "capitalize",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            flexCenter: {
                display : "flex",
                justifyContent : "center",
            },
            0: {
                gridArea : "item1",
                backgroundColor : "rgba(15,255,110, 0.25)",
                borderRadius: "8%",
                margin : "1rem 2rem 1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            1: {
                gridArea : "item2",
                backgroundColor : "rgba(153,25,110, 0.5)",
                borderRadius: "8%",
                margin : "1rem 2rem 1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            2: {
                gridArea : "item3",
                backgroundColor : "rgba(15,25,110, 0.25)",
                borderRadius: "8%",
                margin : "1rem 2rem 1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            3: {
                gridArea : "item4",
                backgroundColor : "rgba(233,53,70, 0.5)",
                borderRadius: "8%",
                margin : "1rem 2rem 1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            4: {
                gridArea : "item5",
                backgroundColor : "rgba(153,253,110, 0.25)",
                borderRadius: "8%",
                margin : "1rem 2rem 1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            5: {
                gridArea : "item6",
                backgroundColor : "rgba(255,5,5, 0.5)",
                borderRadius: "8%",
                margin : "1rem 2rem 1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            gridSpacing: {
                display: "grid",
                height: "100%",
                width: "100%",
                gridTemplateColumns : "17rem 17rem 17rem",
                gridTemplateRows : "15.5rem 15.5rem",
                gridTemplateAreas : ` 
                    "item1 item2 item3"
                    "item4 item5 item6"
                `,
                backgroundColor : "rgb(140,140,140,)",
                padding : "1rem",
                margin : "1rem",
            },
            shoppingCartDiv : {
                margin: "1rem",
                padding: "1rem",
                boxSizing: "border-box",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius : "10%",
            },
            shoppingCartStyle : {
                margin : "1rem",
                padding : "3rem",
                fontSize : "2rem",
                fontFamily: "Georgia",
                color : "rgba(0,0,0,0.5)",
                fontWeight : "bold",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
                backgroundColor: "rgba(0, 189, 0, 0.75)",
                cursor: "pointer",
                border: "none",
                outline: "none",
                borderRadius : "10%",
            },
        }
    }
    render() {
        return(
            <div style={this.styles.centerSpacing}>
                <Header styles={this.styles}/>
                <Grid styles={this.styles} />
                <ShoppingCart styles={this.styles}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
)