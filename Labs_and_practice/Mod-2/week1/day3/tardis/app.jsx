class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tardis : {
                name: "Time and Relative Dimension in Space",
                caps: false,
            },
        }
    }
    render() {
        return(
            <div>
                <DivOne name={this.state.tardis.name} caps={this.state.tardis.caps} />
               {/*  <DivFour />   */}
            </div>
        )
    }
}

ReactDOM.render( 
    <App />,
    document.getElementById("container")
);