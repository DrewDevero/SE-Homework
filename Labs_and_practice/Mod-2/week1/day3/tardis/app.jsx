class App extends React.Component {
    render() {
        return(
            <div>
                <DivOne />
            </div>
        )
    }
}

ReactDOM.render( 
    <App />,
    document.getElementById("container")
);