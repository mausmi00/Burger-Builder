import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './CheckOutSummary.module.css'

const checkoutSummary = (props) => {
   
  return (
    <div className = {classes.CheckOutSummary}>
      <h1>We hope it tastes well!!!</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto", textAlign: 'center'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button 
      clicked = {props.checkoutCancelled} btnType="Danger" >
        CANCEL
      </Button>
      <Button clicked = {props.checkoutContinued} btnType="Success" >
        SUBMIT
      </Button>
    </div>
  );
};

export default checkoutSummary;
