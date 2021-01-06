import React from "react";
import axios from "axios";

const BOOKS_URL = 'http://myapi-profstream.herokuapp.com/api/cccb55/books'

export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    async getAllBooks() {
        try {
            const res = await axios.get(BOOKS_URL);
            this.setState({ books : res.data })
        } catch(err) {
            console.log(err);
        } finally {
            console.log("Attempt made to retrieve Books data")
        }
    }

    componentDidMount() {
        this.getAllBooks();
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
    const { title, author, release_date, image } = this.state;
    const book = { title, author, release_date, image };
    try {
      const res = await axios.post(BOOKS_URL, book);
      console.log(res.data);
      const updateRes = await axios.get(BOOKS_URL);
      this.setState({ books: updateRes.data });
    } catch(e) {
      console.error(e.message);
    }
  }
  async handleDelete(id) {
    try {
      const res = await axios.delete(BOOKS_URL + id); // target wine id
      console.log(res.data);
      const updateRes = await axios.get(BOOKS_URL);
      this.setState({ books: updateRes.data });
    } catch(er) {
      console.error(er.message)
    }
  }
  render() {
    return (
      <div className="books">
        <ul>
          {/* render info */}
          {
            this.state.books && this.state.books.map(book => (
              <li key={book.id}>
                { book.title }: Author { book.author } <button onClick={ () => this.handleDelete(book.id) }>Delete Book</button>
              </li>
            ))
          }
        </ul>
        <form className="new-book-form"
          onChange={ this.handleChange }
          onSubmit={ this.handleSubmit }>
          <label>
            Book Title:
            <input type="text" name="title" />
          </label>
          <label>
            Author:
            <input type="text" name="author" />
          </label>
          <label>
            Release Date:
            <input type="text" name="release_date" />
          </label>
          <label>
            Image:
            <input type="text" name="image" />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
  }
}