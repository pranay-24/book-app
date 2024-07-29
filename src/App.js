import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Book App</h1>
        <Routes>
        <Route path="/" element={<BookList />} />
        {/* <Route path="/book/:bookId" element={<BookDetail />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
