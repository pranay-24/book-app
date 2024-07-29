import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (bookId) {
      axios.get(`YOUR_API_GATEWAY_URL?id=${bookId}`)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the book details!", error);
        });
    }
  }, [bookId]);

  if (!book) return <div>Select a book to see details</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
