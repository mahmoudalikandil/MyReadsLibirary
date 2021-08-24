import React from "react";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

class Search extends React.Component {
  render() {
    const {
      showSearchPage,
      shareListBooks,
      searchForBooks,
      moveBook,
      handleSearchPage,
    } = this.props;
    const booksWithShelf =
      shareListBooks.length > 0 &&
      shareListBooks.map((book) => {
        console.log("helloInternally", { ...book, shelf: "none" });
        return { ...book, shelf: "none" };
      });
    console.log("booksWithShelf : >>", booksWithShelf);
    return (
      <Link to="/search">
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button
                className="close-search"
                onClick={() => handleSearchPage(false)}
              >
                Close
              </button>
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                      */}
              <input
                type="text"
                placeholder="Search by title or author"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    searchForBooks(event.target.value);
                  }
                }}
              />
            </div>
          </div>
          <div className="search-books-results">
            {booksWithShelf.length > 0 && (
              <div className="list-books-content">
                <BookShelf
                  books={booksWithShelf}
                  shelfType="none"
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

// .filter((eachbook) => {
//     eachbook.id ===
//       shareListBooks.find(
//         (mainbook) => mainbook.id === eachbook.id
//       ).id;
//   })
