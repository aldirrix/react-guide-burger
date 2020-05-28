import React, { Fragment } from "react";
import Burger from "../components/Burger";

const BurgerBuilder = () => {
  return (
    <Fragment>
      <Burger/>
      <div>Build Controls</div>
    </Fragment>
  );
};

export default BurgerBuilder;
