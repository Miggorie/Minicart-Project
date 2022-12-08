import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/index.css";

function ProductCardItem(props) {
  //importing props from Products.js
  const { product, addCart } = props;
  return (
    <section>
      <Card style={{ width: "18rem", height: "28rem" }}>
        <Card.Body className="card shadow-sm h-100">
          <Card.Img src={product.image_link} />
          <Card.Title>{product.name}</Card.Title>
          <div id="priceTagContainer">
            <div
              className="d-flex flex-row
              "
            >
              {/* When clicked a function in App.js starts */}
              <Button onClick={() => addCart(product)}>Buy</Button>
              <Card.Text id="priceTag">{product.price}</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}

export default ProductCardItem;
