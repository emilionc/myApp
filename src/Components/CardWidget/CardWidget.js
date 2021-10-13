import React from "react";
import { Icon } from "semantic-ui-react";

const CardWidget = (props) => {
  return (
    <div>
      <div>
        {" "}
        <Icon disabled name="cart" />
      </div>
      <span>{props.numeroItems}</span>
    </div>
  );
};

export default CardWidget;
