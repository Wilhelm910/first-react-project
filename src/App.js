import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className='content'>
      <div className="container">
        <BrowserRouter >
          <header>
            <div>
              <Link to="/"><h1>#Vanlife</h1></Link>
            </div>
            <nav>
              <Link to="/about">About</Link>
              <Link >Van</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
