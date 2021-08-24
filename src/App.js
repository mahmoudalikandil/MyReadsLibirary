import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import Search from "./Search";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchListBooks: [],
    showSearchPage: false,
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
  searchForBooks = (query) => {
    BooksAPI.search(query).then((value) => {
      console.log(value);
      this.state.searchListBooks = this.setState({ searchListBooks: value });
    });
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  handleSearchPage = (value) => {
    this.state.showSearchPage = this.setState({ showSearchPage: value });
  };
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route exact path="/search">
            <Search
              showSearchPage={this.state.showSearchPage}
              shareListBooks={this.state.searchListBooks}
              searchForBooks={this.searchForBooks}
              moveBook={this.moveBook}
              handleSearchPage={this.handleSearchPage}
            />
          </Route>
        ) : (
          <Route exact path="/">
            <ListBooks
              books={this.state.books}
              moveBook={this.moveBook}
              showSearchPage={this.handleSearchPage}
            />
          </Route>
        )}
      </div>
    );
  }
}

export default BooksApp;

{
  /* <BrowserRouter>
        <Route  render={()=><Book></Book>} />
        </BrowserRouter> */
}
