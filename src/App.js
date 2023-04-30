import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/NavBar/Navbar'

function App() {
  return (
  <div className="App">
  <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/category/:category' element={<Main/>}/>
      </Routes>
  </Router>

  
  </div>
  );
}

export default App;