import React from "react";
import axios from "axios";

const BOOKS_URL = 'http://myapi-profstream.herokuapp.com/api/cccb55/books'

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.selectBook = this.selectBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.submitEditedBook = this.submitEditedBook.bind(this);
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

  selectBook(selectedBook) {
    this.setState({ selectedBook });
  }

  editBook(e) {
    const {name, value} = e.target;
    this.setState({...this.state, selectedBook: {...this.state.selectedBook, [name]: value}})
  }

  async submitEditedBook() {
    try {
      const editedBook = this.state.selectedBook;
      const focusBook = BOOKS_URL + editedBook.id;
      await axios.patch(focusBook, editedBook);
      const resRefresh = await axios.get(BOOKS_URL);
      this.setState({ books: resRefresh.data });
    } catch(err) {
      console.log(err)
    } finally {
      console.log("Book patch attempt made")
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
                { book.title }: Author { book.author } <button onClick={ () => this.handleDelete(book.id) }>Delete Book</button> <button onClick={ () => this.selectBook(book) }>Edit Book</button>
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

        <hr/>
      {
        this.state.selectedBook && <form className="new-book-form" onChange={ () => this.editBook }
          onSubmit={ () => this.submitEditedBook }>
          <label>
            Book Title:
            <input type="text" name="title" defaultValue={ this.state.selectedBook.title } />
          </label>
          <label>
            Author:
            <input type="text" name="author" defaultValue={ this.state.selectedBook.author } />
          </label>
          <label>
            Release Date:
            <input type="text" name="release_date" defaultValue={ this.state.selectedBook.release_date } />
          </label>
          <label>
            Image:
            <input type="text" name="image" defaultValue={ this.state.selectedBook.image } />
          </label>
          <input type="submit" />
        </form>
      }
    </div>
    )
  }
}

export default Books;