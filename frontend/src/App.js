import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes,   } from "react-router-dom";
import Nav from './Components/Nav'
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes> 
          <Route path="/product" element={<Products/>} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="/product/:id" element={<SingleProduct/>} />
          <Route path="/" exact element={<Home/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
