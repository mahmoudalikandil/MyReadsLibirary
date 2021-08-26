import React from "react";
class BookShelfChanger extends React.Component {
  changeValue = (event) => {
    const { moveBook, book } = this.props;
    const { value } = event.target;
    moveBook(book, value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.changeValue} value={this.props.book.shelf}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default BookShelfChanger;
