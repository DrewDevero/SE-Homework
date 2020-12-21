/* class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Test App3</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
) */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async componentDidMount() {
    try {
      const res = await axios.get('https://swapi.dev/api/people')
      console.log(res.data.results);
      this.setState({ people: res.data.results });
    }  catch(e) {
      console.error(e)
    }
  }
  render() {
    return(
        <div>
            <h1>hello</h1>
            {
            this.state.people && this.state.people.map(item => <li>{item.name}</li>) || "... loading"
            }
        </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));