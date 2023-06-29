import React from 'react';
import './App.css';
import { MesSmartphones } from './constant/toutemarque'; // constante de tout mon magasin
import Signup from "./pages/signup/signup"
import Signin from './pages/signin/Signin';
import Home from './pages/home/home';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/store/nproducts';
import Card from './components/article/index';
import logohydra from '../src/assets/hydra smartphones.jpg';
function App() {
  return (
    <>
    <div className='res'>
      <div className='cont'>
    <h4> Contacté Nous sur : </h4>
    </div>
    <a href='/'> facebook</a>
    <a href=''> instagram</a>
    <a href=''> tiktok</a>
    </div>
      <nav className="nav">
        <button><Link to="/">Home</Link></button>
        <Link to="/Products">Products</Link>
        <Link to="/Signin">Sign in</Link>
        <Link to="/Signup"> Sign Up</Link>
      </nav>
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path="/Signin" element={<Signin />}/>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/MesSmartphones/:id" element={<Card data={MesSmartphones} />} />
      </Routes>
      </>
  )
}    
export default App;
