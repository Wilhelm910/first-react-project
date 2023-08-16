import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import "./server"

import Home from './pages/Home';
import About from './pages/About';
import VansList, { loader as vansLoader } from './pages/Vans/Vans-list';
import VanDetails from './pages/Vans/Van-Details';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import Vans from './pages/Host/Vans';
import HostVansDetails from './pages/Host/HostVansDetails';
import HostVanInfo from './pages/Host/HostVansInfo';
import HostVanPhotos from './pages/Host/HostVansPhotos';
import HostVanPricing from './pages/Host/HostVansPricing';
import HostVanLayout from './components/HostVanLayout';
import NotFound from './pages/NotFound';
import Error from './components/Error';

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vanslist" element={<VansList />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vanslist/:id" element={<VanDetails />} />
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<HostVansDetails />} >
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
        <Route path="pricing" element={<HostVanPricing />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />}></Route>
  </Route>
))

function App() {
  return (
    <div className='content'>
      <div className="container">
        <RouterProvider router={route} />
      </div>
    </div>
  );
}

export default App;
