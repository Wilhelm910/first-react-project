import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import "./server"
import { requireAuth } from './utils';

import Home from './pages/Home';
import About from './pages/About';
import VansList, { loader as vansLoader } from './pages/Vans/Vans-list';
import VanDetails, { loader as vanDetailLoader } from './pages/Vans/Van-Details';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import Vans, { loader as hostVansLoader } from './pages/Host/Vans';
import HostVansDetails, { loader as hostVansDetailLoader } from './pages/Host/HostVansDetails';
import HostVanInfo from './pages/Host/HostVansInfo';
import HostVanPhotos from './pages/Host/HostVansPhotos';
import HostVanPricing from './pages/Host/HostVansPricing';
import HostVanLayout from './components/HostVanLayout';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login from './pages/Login';

const route = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} loader={async () => { return null }}>
    <Route path="/" element={<Home />} loader={async () => { return null }} />
    <Route path="about" element={<About />} loader={async () => { return null }} />
    <Route path='login' element={<Login />} loader={async () => { return null }} />
    <Route path="vanslist" element={<VansList />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vanslist/:id" element={<VanDetails />} loader={vanDetailLoader} />
    <Route path="host" element={<HostLayout loader={async () => { return null }} />}>
      <Route index element={<Dashboard />} loader={async () => await requireAuth()} />
      <Route path="reviews" element={<Reviews />} loader={async () => await requireAuth()} />
      <Route path="income" element={<Income />} loader={async () => await requireAuth()} />
      <Route path="vans" element={<Vans />} loader={hostVansLoader} />
      <Route path="vans/:id" element={<HostVansDetails />} loader={hostVansDetailLoader} >
        <Route index element={<HostVanInfo />} loader={async () => { return null }} />
        <Route path="pricing" element={<HostVanPricing />} loader={async () => { return null }} />
        <Route path="photos" element={<HostVanPhotos />} loader={async () => { return null }} />
        <Route path="pricing" element={<HostVanPricing />} loader={async () => { return null }} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} loader={async () => { return null }}></Route>
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
