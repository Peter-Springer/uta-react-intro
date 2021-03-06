import React from 'react'

const Book = ({details, updateBookList}) => {
  let authors

  if (details.authors.length !== 1) {
    authors = details.authors.slice(0, details.authors.length - 1).join(', ')
  } else {
    authors = details.authors[0]
  }
  let authorTag = details.authors.length === 1 ? "author: " : "authors: "
    return (
      <div className="book-container">
        <img className="book-img" alt='thumbnail' src={details.imageLinks.thumbnail}/>
        <div className="book-detail">
          <p className="title">title: {details.title}</p>
          <p className="authors">
            {authorTag}{authors}
          </p>
          <button className="book-button" onClick={() => updateBookList(details)}>{details.deleteButton ? 'REMOVE FROM READING LIST' : 'ADD TO READING LIST'}</button>
        </div>
      </div>
    )
}

export default Book
