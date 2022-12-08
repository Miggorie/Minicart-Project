import React from "react";
import Navigation from "./Navigation";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import Container from "react-bootstrap/Container";

const Header = ({
  cartItems,
  setCartItems,
  addCart,
  onRemove,
  clearCart,
  removeProducts,
}) => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container className="d-flex justify-content-between">
            <Navigation />
            <div>
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                addCart={addCart}
                onRemove={onRemove}
                clearCart={clearCart}
                removeProducts={removeProducts}
              />
            </div>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
