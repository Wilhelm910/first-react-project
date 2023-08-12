import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./server"

import Home from './pages/Home';
import About from './pages/About';
import VansList from './pages/Vans/Vans-list';
import VanDetails from './pages/Vans/Van-Details';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import Vans from './pages/Host/Vans';
import HostVansDetails from './pages/Host/HostVansDetails';

function App() {
  return (
    <div className='content'>
      <div className="container">
        <BrowserRouter >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vanslist" element={<VansList />} />
              <Route path="vanslist/:id" element={<VanDetails />} />
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<Vans />} />
                <Route path="vans/:id" element={<HostVansDetails />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
