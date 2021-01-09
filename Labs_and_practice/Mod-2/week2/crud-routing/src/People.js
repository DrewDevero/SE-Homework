import React from "react";
import axios from "axios";

const PEOPLE_URL = 'http://myapi-profstream.herokuapp.com/api/0c3918/persons'

class People extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.selectPerson = this.selectPerson.bind(this);
        this.editPerson = this.editPerson.bind(this);
        this.submitEditedPerson = this.submitEditedPerson.bind(this);
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

  selectPerson(selectedPerson) {
    this.setState({ selectedPerson });
  }

  editPerson(e) {
    const { name, value } = e.target;
    this.setState({...this.state, selectedPerson: {...this.state.selectedPerson, [name]: value}})
  }

  async submitEditedPerson() {
    try {
      const editedPerson = this.state.selectPerson;
      const focusPerson = PEOPLE_URL + editedPerson.id;
      await axios.patch(...this.state, focusPerson);
      const resRefresh = await axios.get(PEOPLE_URL);
      this.setState({ people: resRefresh.data })
    } catch(err) {
        console.log(err);
    } finally {
        console.log("Person patch attempt made");
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
                username: { person.username }: email { person.email } <button onClick={ () => this.handleDelete(person.id) }>Delete Person</button><button onClick={ () => this.selectPerson(person) }>Edit Person</button>
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

        <hr/>
      {
        this.state.selectedPerson && <form className="new-person-form" onChange={ () => this.editPerson }
          onSubmit={ () => this.submitEditedPerson }>
          <label>
            First Name:
            <input type="text" name="firstname" defaultValue = { this.state.selectedPerson.firstname }/>
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" defaultValue = { this.state.selectedPerson.lastname } />
          </label>
          <label>
            Email:
            <input type="text" name="email" defaultValue = { this.state.selectedPerson.email } />
          </label>
          <label>
            Username:
            <input type="text" name="username" defaultValue = { this.state.selectedPerson.username } />
          </label>
          <input type="submit" />
        </form>
      }
    </div>
    )
  }
}

export default People;