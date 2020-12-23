class App extends React.Component {
    
    render() {
        return(
            <div>
                <DivOne />
               {/*  <DivFour />   */}
            </div>
        )
    }
}

ReactDOM.render( 
    <App />,
    document.getElementById("container")
);