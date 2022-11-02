import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container" >
      <nav className=" bg-dark">
        <Link to="/">Shop</Link>
        <Link to='/product' >Products</Link>
        
      </nav>
    </div>
  );
}

export default Nav;
