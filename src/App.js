import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContanier/ItemListContainer';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <ItemListContainer texto="Camisetas Fanatics"/>
        <header className="App-header bg-secondary">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Routes>
        
      </Routes>
    </Router>
  );
}

export default App;
