import React, { Fragment } from "react";
import http from "../http";
import { Col, Row, Container } from "react-bootstrap";
import Product from "../Components/Product"


function Products() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    if (products.length !== 0) return;
    http.get("/products").then((response) => {
      if (response.status === 200) {
        setProducts(response.data);
      }
    });
  });

  return (
    <Fragment >
      <Container>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={3} >
              <Product product={product}  />
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Products;
