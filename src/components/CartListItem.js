import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../styles/index.css";

const CartListItem = (props) => {
  const { item, onRemove, addCart, removeProducts } = props;
  return (
    <Container>
      <div key={item.id}>
        <div>
          <img src={item.api_featured_image} width="60px" alt={item.name} />
        </div>
        <div>
          <b>{item.name}</b>
        </div>
        <Container className="d-flex">
          <div>
            <Button
              className="m-2"
              variant="secondary"
              onClick={() => addCart(item)}
            >
              +
            </Button>
            <Button
              className="m-2"
              variant="secondary"
              onClick={() => onRemove(item)}
            >
              -
            </Button>
          </div>
          <div>
            {item.qty} x {item.price}:-
          </div>
          {
            <Button
              className="ms-auto m-2"
              variant="secondary"
              onClick={() => removeProducts(item)}
            >
              x
            </Button>
          }
        </Container>
        <hr />
      </div>
    </Container>
  );
};

export default CartListItem;
