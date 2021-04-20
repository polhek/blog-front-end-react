import './App.css';

import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Admin from './components/Admin';
import { Switch, Route } from 'react-router-dom';
import NewPost from './components/NewPost';
import { HashRouter as Router } from 'react-router-dom';
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
