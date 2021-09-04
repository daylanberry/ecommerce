import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get("http://localhost:8000/api/products/");
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, i) => (
          <Col key={product._id} sm={12} md={6} lg={4} xs={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
