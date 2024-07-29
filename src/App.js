import React,{useState, useEffect} from 'react';
import { Redirect, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import BookList from './BookList';
import BookDetail from './BookDetail';
import SignIn from './components/SignIn';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <h1>Book App</h1>
        <Routes>
       
        <Route path="/" element= {isAuthenticated ? <BookList /> : <Redirect to="/signin" />} />
        {/* <Route path="/book/:bookId" element={<BookDetail />} /> */}
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
