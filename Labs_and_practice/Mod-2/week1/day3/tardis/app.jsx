class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tardis : {
                name: "Time and Relative Dimension in Space",
                caps: false,
            }
        }
        
    }
    changeIt = (text) => {
        if (this.state.tardis.caps) {
            this.setState({
                tardis : {
                    name : text.toLowerCase(),   
                    caps : false
                }
            })
        } else {
            this.setState({
                tardis : {
                    name : text.toUpperCase(),
                    caps : true
                }
            })
        }
    }
    render() {
        return(
            <div>
                <DivOne />
                <DivTwo />
                <DivThree />
                <DivFour />               
            </div>
        )
    }
}

ReactDOM.render( 
    <App />,
    document.getElementById("container")
);