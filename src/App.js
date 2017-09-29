import React, { Component } from 'react'
import BookList from './BookList'
import SearchField from './SearchField'
import logo from './logo.svg'
import compozed from './compozed.jpg'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      searchInput: '',
      myBooks: []
    }
  }

  handleSearch = (e) => {
    this.setState({searchInput: e.target.value})
  }

  handleAPICall = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&maxResults=20`)
    .then((response) => response.json())
    .then(response => this.setState({ items: response.items.map(item => item.volumeInfo)}))

  }

  handleAddBook = (book) => {
      this.setState({
        myBooks: [...this.state.myBooks, {
          id: book.infoLink,
          title: book.title,
          imageLinks: book.imageLinks,
          authors: book.authors,
          deleteButton: true
         }],
      })
  }

  handleDeleteBook = (book) => {
    this.setState({ myBooks: this.state.myBooks.filter((item) => item !== book) })
  }

  render() {
    return (
      <div className="App">
      <img src={compozed} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <SearchField search={this.handleSearch} apiCall={this.handleAPICall}/>
      <div className="body">
        <BookList header="Results" bookListCSS="api-list" books={this.state.items} updateBookList={this.handleAddBook}/>
        <BookList header="My Reading List" bookListCSS="my-book-list" books={this.state.myBooks} updateBookList={this.handleDeleteBook}/>
      </div>

      </div>
    );
  }
}

export default App;
