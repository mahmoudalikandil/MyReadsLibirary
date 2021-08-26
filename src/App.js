import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    const newBook = book;
    newBook.shelf = shelf;
    const newBooks = this.state.books
      .filter((deadBook) => deadBook.id !== newBook.id)
      .concat(newBook);
    this.setState({ books: newBooks });
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search">
          <Search moveBook={this.moveBook} myBooks={this.state.books} />
        </Route>

        <Route exact path="/">
          <ListBooks books={this.state.books} moveBook={this.moveBook} />
        </Route>
      </div>
    );
  }
}

export default BooksApp;
