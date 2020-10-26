import React from 'react';
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const ordersummary =(props)=>{

  const ingredientsummary=Object.keys(props.ingredients)
  
  .map(igkey=>{
    
    return <li key={igkey}>{igkey} : {props.ingredients[igkey]}</li>
  });
    


    return(
      <Aux>
        <h3>Your order</h3>
        <ul>{ingredientsummary}</ul>
    <p>Total Price:{props.price}</p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={props.purchasecancel}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
      </Aux>
    );
};

export default ordersummary;