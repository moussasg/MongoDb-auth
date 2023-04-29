import React from 'react';
import './App.css';
import * as mdb from 'mdb-ui-kit';
import Signin from './pages/signin/Signin';
import Home from './pages/home/home';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/store/nproducts';
import Card from './components/article/index';
import { MesSmartphones } from './constant/toutemarque';
import logohydra from '../src/assets/hydra smartphones.jpg';
function App() {
  return (
    <>
      <nav className="nav">
        <div className="logpg">
          <img src={logohydra} alt="Hydra smartphones logo" />
        </div>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Signin">Sign in</Link>
      </nav>
      <Routes>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/MesSmartphones/:id" element={<Card data={MesSmartphones} />} />
      </Routes>
      </>
  )
}    
export default App;
