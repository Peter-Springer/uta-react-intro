import React from 'react'
import Book from './Book'

const BookList = ({books, updateBookList, bookListCSS, header}) => {
  if (books) {
    return (
      <div className={bookListCSS}>
        <h3>{header}</h3>
      {books.map((book, i) => {
        return (
          <div key={i}>
            <Book details={book} updateBookList={updateBookList}/>
          </div>
        )
      })}
      </div>
    )
  }
}

export default BookList
