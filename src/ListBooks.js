import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class ListBooks extends React.Component {
  state = {
    shelfTypes: [
      { name: " Currently Reading ", keyName: "currentlyReading" },
      { name: " Want To Read ", keyName: "wantToRead" },
      { name: " Read ", keyName: "read" },
    ],
  };
  render() {
    const { books, moveBook, showSearchPage } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <Link to="/">
            <h1>MyReads</h1>
          </Link>

          <div className="list-books-content">
            <div>
              {this.state.shelfTypes.map((shelf, index) => (
                <BookShelf
                  key={index}
                  books={books}
                  shelfType={shelf.keyName}
                  shelfName={shelf.name}
                  moveBook={moveBook}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">
            <button onClick={showSearchPage}>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
