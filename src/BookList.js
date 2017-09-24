import React from 'react'
import Book from './Book'

const BookList = ({books}) => {
  if (books) {
    return (
      <div>
      {books.map((book, i) => {
        return (
          <div key={i}>
            <Book details={book}/>
          </div>
        )
      })}
      </div>
    )
  }
}

export default BookList
