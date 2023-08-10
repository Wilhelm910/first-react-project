import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./server"

import Home from './components/Home';
import About from './components/About';
import VansList from './components/Vans-list';

function App() {
  return (
    <div className='content'>
      <div className="container">
        <BrowserRouter >
          <header>
            <div>
              <Link className='nav--headline' to="/">#Vanlife</Link>
            </div>
            <nav>
              <Link className='nav--link' to="/about">About</Link>
              <Link className='nav--link' to="/vanslist">Van</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="vanslist" element={<VansList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
