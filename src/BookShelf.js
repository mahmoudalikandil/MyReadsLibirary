import React from "react";
import "./App.css";
import Book from "./Book";

class BookShelf extends React.Component {
  render() {
    const { books, shelfName, shelfType, moveBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {books
                .filter((book) => book.shelf === shelfType)
                .map((book, index) => (
                  <Book key={index} book={book} moveBook={moveBook} />
                ))}
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
