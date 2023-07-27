import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
import { addProduct } from "../rtk/slices/cart-slice";

function Products() {
  const product = useSelector((state) => state.products);

  // console.log(product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="py-5">
      <Row className="py-5">
        {product.map((prod) => (
          <Col key={prod.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={prod.image}
              />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>{prod.description}</Card.Text>
                <Card.Text>{prod.price}$</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(addProduct(prod));
                  }}
                >
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
