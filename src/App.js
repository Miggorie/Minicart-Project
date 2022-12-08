import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";
import Header from "./components/Header.js";

//Hi! Here is my react app, I have been building the app-functions in App.js
//and pass down with useState to pages and components. I tried to use Redux
//but run into trouble. We are learning Redux in school on friday this week.
//I haven't done any styling in the cart.

function App() {
  const [cartItems, setCartItems] = useState([]);
  //Function to add/increase to cart
  const addCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  //function for removing/reducing an existing product
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // function for deleting product from cart
  const removeProducts = (item) => {
    setCartItems(cartItems.filter((x) => x.id !== item.id));
  };

  //function for clearing the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Header
        cartItems={cartItems}
        addCart={addCart}
        onRemove={onRemove}
        clearCart={clearCart}
        removeProducts={removeProducts}
      />
      <Products cartItems={cartItems} addCart={addCart} onRemove={onRemove} />
    </div>
  );
}

export default App;
