import React from "react";
import "./CartItem.css";
import { Row, Col, ListGroupItem } from "reactstrap";

const CartItem = (props) => {
  const { item, getQuantity, removeFromCart, getTotalItemPrice } = props;

  const { id, img, title, catagory, offerPrice } = item;
  let quantity = getQuantity(id);
  let totalPrice = getTotalItemPrice(id);

  return (
    <ListGroupItem className="mb-4 shadow-sm">
      <Row>
        <Col md="4">
          <img src={img} className="w-100 cart-img" alt="cart item" />
        </Col>

        <Col md="8">
          <div className="prod-details">
            <h5 className="m-0">{title}</h5>
            <p className="small text-muted m-0 mb-2">catagory: {catagory}</p>
            <p className="text-muted m-0">Quantity: {quantity}</p>
            <p className="text-muted mb-3">
              {quantity} x &#x24;{offerPrice} ={" "}
              <span className="bold">&#x24; {totalPrice}</span>
            </p>
            <span className="cart-remove" onClick={() => removeFromCart(id)}>
              REMOVE
            </span>
          </div>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CartItem;
