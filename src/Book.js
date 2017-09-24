import React from 'react'

const Book = ({details}) => {
  let authors
  if (details.volumeInfo.authors) {
    authors = details.volumeInfo.authors.map((author, i) => <p key={i}>{author}</p>)
  }
    return (
      <div>
        <p>{details.volumeInfo.title}</p>
        <img alt='thumbnail' src={details.volumeInfo.imageLinks.thumbnail}/>
        {authors}
      </div>
    )
}

export default Book
