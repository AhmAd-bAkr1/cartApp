import Table from "react-bootstrap/Table";
import { Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeProduct } from "../rtk/slices/cart-slice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((ace, product) => {
    ace = ace + product.price * product.quantity;
    return ace;
  }, 0);
  console.log(total);
  console.log(cart.length);
  return (
    <>
      <Container className="py-5">
        {cart.length === 0 ? (
          <h1 className="py-5"> No Products</h1>
        ) : (
          <Row className="py-5">
            <Button
              className="mx-3"
              style={{ width: "80px" }}
              variant="primary"
              onClick={() => {
                dispatch(clear());
              }}
            >
              Clear
            </Button>
            <h5>Total Price : {total.toFixed(2)}$</h5>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Img</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.title}</td>
                    <td>
                      <Image
                        src={prod.image}
                        alt={prod.title}
                        style={{ width: "110px" }}
                      />
                    </td>
                    <td>{prod.price}</td>
                    <td className="text-center">{prod.quantity}</td>

                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch(removeProduct(prod));
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        )}
      </Container>
    </>
  );
}

export default Cart;
