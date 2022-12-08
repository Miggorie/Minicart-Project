import React from "react";
import CartListItem from "./CartListItem";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import "../styles/index.css";

const Cart = (props) => {
  const { onRemove, addCart, cartItems, clearCart, removeProducts } = props;
  const clearSetToggle = () => {
    clearCart();
  };

  //Calculating total price and rounding to 1 decimal
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const roundPrice = Math.round(totalPrice * 10) / 10;

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          type="button"
          id="dropdownMenuButton"
          className="btn btn-secondary"
          data-toggle="dropdown"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            className="d-inline-block align-text-top mr-1"
            viewBox="0 0 902.86 902.86"
            role="img"
          >
            <path
              fill="#ffffff"
              d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
               M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
            />
            <path
              fill="#ffffff"
              d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
              c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
              c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
              C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
              c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
               M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
              S619.162,694.432,619.162,716.897z"
            />
          </svg>
          Cart
          {/*This badge doesn't show how many of each product
          just how many different products it is in the cart.
      
          */}
          <Badge bg="secondary">{cartItems.length}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton"
        >
          <div className="m-2">
            <h2>Cart</h2>
            <p>Products in cart: {cartItems.length}</p>
          </div>

          {/*If the array cartItems is 0, show this message
      
          */}

          {cartItems.length === 0 && (
            <Dropdown.Item className="minicart-empty " href="#/action-1">
              Go shopping!
            </Dropdown.Item>
          )}

          <Dropdown.Item className="py-5" href="#/action-1">
            <Container>
              {cartItems.map((item) => (
                <CartListItem
                  item={item}
                  key={item.id}
                  onRemove={onRemove}
                  addCart={addCart}
                  removeProducts={removeProducts}
                />
              ))}
            </Container>

            {/*If the array cartItems is NOT 0, map through the array and get the
                   value from roundPrice.
          */}
            {cartItems.length !== 0 && (
              <>
                <Container className="mt-5">
                  <div>
                    <span>
                      <h2>
                        Total price: <strong>{roundPrice}:-</strong>
                      </h2>
                    </span>
                  </div>
                  <div>
                    <p></p>
                    <Button onClick={() => clearSetToggle()}>Empty cart</Button>
                  </div>
                </Container>
              </>
            )}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Cart;
