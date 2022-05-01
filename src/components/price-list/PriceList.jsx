import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const PriceList = (props) => {
  const { totalItems, totalPrice } = props;

  return (
    <ListGroup className="shadow-sm mb-4">
      <ListGroupItem>
        Price ( {totalItems} item )
        <span className="float-right">&#x24;{totalPrice}</span>
      </ListGroupItem>

      

      <ListGroupItem color="success">
        <b>
          TOTAL AMOUNT<span className="float-right">&#x24;{totalPrice}</span>
        </b>
      </ListGroupItem>
    </ListGroup>
  );
};

export default PriceList;
