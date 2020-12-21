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
    this.state = {name : "Drew"}
    this.handleChange = this.handleChange.bind(this);
    this.changeName = this.changeName.bind(this);
  }
    // e stands for the event object from the borwser
  handleChange(e) {
    /* console.log(e.target.value, e.target.name); */
    const {name, value} = e.target;
        console.log(name, value);
        // { 'name': 'something else'}
    // { [name] => username | password }

    /* this.setState({ [name]: value });
    console.log(this.state); */

// OR

    this.setState(prevState => ({
        newUser: {
            ...prevState.newUser, [name]: value //...makes a copy first then appends information
        }
    }))
    console.log(this.state);
  }
    // this.setState(prevState => ({
		// 	newUser: {
		// 		...prevState.newUser, [name]: value
		// 	}
		// }));
    // }

    changeName() {
        this.setState({name : "Drew's twin"})
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
        <button onClick={ this.changeName }>Change name!</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('container'));