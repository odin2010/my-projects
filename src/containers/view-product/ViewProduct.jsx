import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import { connect } from "react-redux";
import { getProduct, getSelectedQuantity } from "../../redux/reducers/products";
import { isWishlisted } from "../../redux/reducers/wishlist";
import { isAddedToCart } from "../../redux/reducers/cart";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions";
import Counter from "../../components/counter/Counter";
import Button from "../../components/shared/button/Button";

const ViewProduct = (props) => {
  const prodId = parseInt(props.match.params.prodId);
  const {
    getProduct,
    getSelectedQuantity,
    isWishlisted,
    isAddedToCart,
    incrementQuantity,
    decrementQuantity,
    addToCart,
    addToWishlist,
    removeFromWishlist,
  } = props;

  let product = getProduct(prodId);
  let selectedQuantity = getSelectedQuantity(prodId);
  let isProdWishlisted = isWishlisted(prodId);
  let isProdAdded = isAddedToCart(prodId);

  return (
    <Container style={{ margin: "2.8rem auto 2rem auto" }}>
      <Row>
        <Col md="5">
          <img src={product.img} className="w-100" alt="product" />
          <Counter
            quantity={selectedQuantity}
            incrementQuantity={() => incrementQuantity(prodId)}
            decrementQuantity={() => decrementQuantity(prodId)}
          />
        </Col>

        <Col md="7">
          <h5 className="mb-0 d-inline-block">{product.title}</h5>
          <span className="float-right">
            <ion-icon name="heart-outline"></ion-icon>
          </span>
          <br />
          <Badge color="success font-weight-light">
            {product.rating} &#9733;
          </Badge>
          <p className="mb-0 mt-2 text-success">Special Price</p>
          <h2 className="d-inline-block mr-2">&#x24;{product.offerPrice}</h2>
          <span className="d-inline-block text-muted">
            
          </span>
          <p className="font-weight-bold">Available Offers</p>
          <p className="mb-1">
            <ion-icon name="pricetags-outline"></ion-icon>
            <small className="font-weight-bold mx-2">Special offer</small>
            <span>10% off for YouThink academy students ^_-</span>
          </p>
          <p className="mb-1">
            <ion-icon name="pricetags-outline"></ion-icon>
            <small className="font-weight-bold mx-2">Special offer</small>
            <span>5% Unlimited Cashback on Ibrahim's Card</span>
          </p>
         
          <p className="font-weight-bold">Product Description</p>
          <p>{product.desc}</p>

          <div className="btn-container">
            <Button
              event={() => {
                !isProdAdded && addToCart(prodId, selectedQuantity);
              }}
              isAdded={isProdAdded}
            >
              {isProdAdded ? "Added To Cart" : "Add To Cart"}
            </Button>

            <Button
              secondary
              event={() => {
                isProdWishlisted
                  ? removeFromWishlist(prodId)
                  : addToWishlist(prodId);
              }}
            >
              {isProdWishlisted ? (
                <ion-icon
                  name="heart-dislike-outline"
                  style={{ fontSize: "24px" }}
                ></ion-icon>
              ) : (
                <ion-icon
                  name="heart-outline"
                  style={{ fontSize: "24px" }}
                ></ion-icon>
              )}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  getProduct: (id) => getProduct(state.products, id),
  getSelectedQuantity: (id) => getSelectedQuantity(state.products, id),
  isWishlisted: (id) => isWishlisted(state.wishlist, id),
  isAddedToCart: (id) => isAddedToCart(state.cart, id),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  incrementQuantity: (id) => dispatch(incrementQuantity(id)),
  decrementQuantity: (id) => dispatch(decrementQuantity(id)),
  addToWishlist: (id) => dispatch(addToWishlist(id)),
  removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
