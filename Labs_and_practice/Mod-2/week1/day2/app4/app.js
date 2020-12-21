/* class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App Number 4</h1>
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
    this.handleChange = this.handleChange.bind(this);
  }
    // e stands for the event object from the borwser
  handleChange(e) {
    /* console.log(e.target.value, e.target.name); */
    const {name, value} = e.target;
        console.log(name, value);
  }
  render() {
    return (
      <div>
        <form onChange={ this.handleChange }>
          <label>
            username:
            <input type="text" name="username" placeholder="name" />
          </label>
          <label>
            password:
            <input type="text" name="password" placeholder="password" />
          </label>
        </form>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));