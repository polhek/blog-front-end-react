import './App.css';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Admin from './components/Admin';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <div className="bg-gray-300">
        <Navigation />
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="" exact>
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
//! mrbet ne rabm
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

export default App;
