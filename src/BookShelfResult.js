import React from "react";
import "./App.css";
import Book from "./Book";

class BookShelf extends React.Component {
  render() {
    const { books, shelfName, moveBook } = this.props;
    console.log("FromBookShelf", books);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {books.map((book, index) => (
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
