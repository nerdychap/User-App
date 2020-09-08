import React, { createContext, useState, useEffect } from 'react';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FullProfile from './pages/FullProfile';

export const UsersContext = createContext([]);

function App() {
  const [users, setUsers] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results);
        setIsLoaded(true);
      }).catch(err => {
        setIsLoaded(true);
        setError(err);
      })
  }, []);
  if (!isLoaded) {
    return <Loader />;
  }
  else if (error !== false) {
    return <h1>Error in Fetch</h1>
  }
  return (
    <ErrorBoundary>
      <UsersContext.Provider value={users}>
        <>
          <Router>
            <Link to="/users" className="btn btn-dark btn-block text-uppercase mt-2 mb-2 mx-0" >Home</Link>
            <Switch>
              <Route path="/users/:userId" render={(props) => <FullProfile {...props} />} />
              <Route path="/users" render={() => <Homepage />} />
            </Switch>
          </Router>

        </>
      </UsersContext.Provider>
    </ErrorBoundary>

  );
}

export default App;
