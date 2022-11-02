import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import http from "./../http";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    if (!loading) return;
    http.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  });

  return (
    <>
      <Container>
        <Row  style={{justifyContent:"center", marginTop:"50px"}}>
          <Col sm={12} md={6} lg={3}>
            <Card>
              <Card.Img src={product.image} />
              <Card.Body>
                <Card.Title>
                  <h3>{product.name}</h3>
                </Card.Title>
              </Card.Body>
              <div className="price">
                <p>
                  Brand : <span>{product.brand}</span>
                </p>
                <p>
                  Price : <span>{product.price}</span>
                </p>
              </div>
              <Link to={`/product/${product.id}`}>View</Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProduct;
