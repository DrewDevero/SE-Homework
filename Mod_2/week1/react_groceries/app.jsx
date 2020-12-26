class App extends React.Component {
    constructor(props) {
    super(props);
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
            inputStyle: {
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
                border: "none"
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
                margin : "1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            1: {
                gridArea : "item2",
                backgroundColor : "rgba(153,25,110, 0.5)",
                borderRadius: "8%",
                margin : "1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            2: {
                gridArea : "item3",
                backgroundColor : "rgba(15,25,110, 0.25)",
                borderRadius: "8%",
                margin : "1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            3: {
                gridArea : "item4",
                backgroundColor : "rgba(233,53,70, 0.5)",
                borderRadius: "8%",
                margin : "1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            4: {
                gridArea : "item5",
                backgroundColor : "rgba(153,253,110, 0.25)",
                borderRadius: "8%",
                margin : "1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            5: {
                gridArea : "item6",
                backgroundColor : "rgba(255,5,5, 0.5)",
                borderRadius: "8%",
                margin : "1rem",
                padding : "1rem",
                boxShadow : "1rem 1rem 1rem rgba(140,140,140, 0.5)",
            },
            gridSpacing: {
                display: "grid",
                height: "100%",
                width: "100%",
                gridTemplateColumns : "15rem 15rem 15rem",
                gridTemplateRows : "15.5rem 15.5rem",
                gridTemplateAreas : ` 
                    "item1 item2 item3"
                    "item4 item5 item6"
                `,
                backgroundColor : "rgb(140,140,140,)",
                padding : "1rem",
                margin : "1rem",
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