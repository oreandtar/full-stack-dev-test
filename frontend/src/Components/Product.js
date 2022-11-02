import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Product(  { product }) {
  return (
    <>
      <Card>
        <Card.Img src={product.image} />
        <Card.Body>
          <Card.Title>
            <h3>{product.name}</h3>
          </Card.Title>
        </Card.Body>
        <div className="price">
          <p>Brand : <span>{product.brand}</span></p>
          <p>Price : <span>{product.price}</span></p>
        </div>
        <Link to={`/product/${product.id}`} >View</Link>
      </Card>
    </>
  );
}

export default Product;
