import './App.css';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import Admin from './components/Admin';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-gray-300 h-screen">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Posts />
          </Route>
          <Route path="/admin">
            <Admin />
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
