import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/books.json')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
      {books.map(book => (
          <li key={book.id}>
            {book.title}
            <Link to={`/book/${book.id}`}>
              <button>View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
