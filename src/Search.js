import React from "react";
import BookShelfResult from "./BookShelfResult";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class Search extends React.Component {
  state = {
    books: [],
  };

  SearchBook = async (event) => {
    const query = event.target.value;
    let foundBooks = [];
    try {
      foundBooks = await BooksAPI.search(query);
      foundBooks.map((found) => {
        const matched = this.props.myBooks.find((book) => book.id === found.id);
        if (matched !== undefined) {
          console.log("matched", matched);
          found["shelf"] = matched.shelf;
        } else {
          found["shelf"] = "none";
        }
      });
      this.setState({ books: foundBooks });
    } catch (error) {
      this.setState({ books: [] });
      return;
    }

    console.log("new found Books", foundBooks);
    // this.setState({ books: foundBooks });
  };

  render() {
    const { moveBook } = this.props;
    console.log("this.state.books", this.state.books);

    return (
      <Link to="/search">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.SearchBook}
              />
            </div>
          </div>
          <div className="search-books-results">
            {this.state.books.length > 0 && (
              <div className="list-books-content">
                <BookShelfResult
                  books={this.state.books}
                  shelfName="Search Result"
                  moveBook={moveBook}
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }
}
export default Search;
