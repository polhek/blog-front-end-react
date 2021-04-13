import './App.css';

import Navigation from './components/Navigation';
import Posts from './components/Posts';

function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Navigation />
      <Posts />
    </div>
  );
}

export default App;
