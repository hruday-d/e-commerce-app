import './App.css';

import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product-details/:id' exact element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
