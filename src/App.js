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
  // Hello dear students
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    const books = this.state.books.filter((b) => b.id != book.id).concat(book);
    this.setState({ books });
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
