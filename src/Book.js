import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";

class Book extends React.Component {
  render() {
    let { moveBook, book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "icons/book-placeholder.svg"
                })`,
              }}
            ></div>
            <BookShelfChanger
              book={book}
              shelf={book.shelf}
              moveBook={moveBook}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
