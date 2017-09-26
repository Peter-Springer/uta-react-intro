import React from 'react'

const Book = ({details, updateBookList}) => {
  let authors
  if (details.authors) {
    authors = details.authors.map((author, i) => <p key={i}>{author}</p>)
  }
    return (
      <div>
        <p>{details.title}</p>
        <img alt='thumbnail' src={details.imageLinks.thumbnail}/>
        {authors}
        <button onClick={() => updateBookList(details)}>{details.deleteButton ? 'DELETE' : 'ADD'}</button>
      </div>
    )
}

export default Book
