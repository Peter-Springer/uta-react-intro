import React from 'react'
import Book from './Book'

const BookList = ({books, addBook}) => {
  if (books) {
    return (
      <div>
      {books.map((book, i) => {
        return (
          <div key={i}>
            <Book details={book} addBook={addBook}/>
          </div>
        )
      })}
      </div>
    )
  }
}

export default BookList
