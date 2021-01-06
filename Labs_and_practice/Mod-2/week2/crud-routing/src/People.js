import React from "react";
import axios from "axios";

const PEOPLE_URL = 'http://myapi-profstream.herokuapp.com/api/0c3918/persons'

export default class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    async getAllPeople() {
        try {
            const res = await axios.get(PEOPLE_URL);
            this.setState({ people: res.data })
        } catch(err) {
            console.log(err)
        } finally {
            console.log("attempt to retrieve all people made")
        }
    }

    componentDidMount() {
        this.getAllPeople();
    }

    handleChange(e) {
    const { name, value } = e.target;
    // e.target.name
    // e.target.value
    this.setState({ [name]: value })
  }
  async handleSubmit(e) {
    e.preventDefault();
    // this.state.name
    // this.state.year
    // this.state.grapes
    const { firstname, lastname, email, username } = this.state;
    const person = { firstname, lastname, email, username };
    try {
      const res = await axios.post(PEOPLE_URL, person);
      console.log(res.data);
      const updateRes = await axios.get(PEOPLE_URL);
      this.setState({ people: updateRes.data });
    } catch(e) {
      console.error(e.message);
    }
  }
  async handleDelete(id) {
    try {
      const res = await axios.delete(PEOPLE_URL + id); // target wine id
      console.log(res.data);
      const updateRes = await axios.get(PEOPLE_URL);
      this.setState({ people: updateRes.data });
    } catch(er) {
      console.error(er.message)
    }
  }
  render() {
    return (
      <div className="people">
        <ul>
          {/* render info */}
          {
            this.state.people && this.state.people.map(person => (
              <li key={person.id}>
                username: { person.username }: email { person.email } <button onClick={ () => this.handleDelete(person.id) }>Delete Person</button>
              </li>
            ))
          }
        </ul>
        <form className="new-person-form"
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }>
          <label>
            First Name:
            <input type="text" name="firstname" />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}