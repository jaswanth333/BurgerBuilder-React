import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/BuildControls/BuildControls";
import Modal from  "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/Ordersummary/Ordersummary";

const ING_PRICES = {
  salad: 0.3,
  bacon: 0.6,
  cheese: 0.3,
  meat: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable:false,
    purchasing:false
  };

  
  updatePurchasedState(ingredients) {
    const ing={...this.state.ingredients};
    const sum=Object.keys(ing)
    .map(ingkey =>{
      return ingredients[ingkey];
    })  //returns [0,0,0,0]
    .reduce((sum,el)=>{
      return sum+el;          //el= returned ingredients[ingkey]
      
    },0);
   
   this.setState({purchasable : sum>0});
    

  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updateCount;
    const priceadd = ING_PRICES[type];
    const oldprice = this.state.totalPrice;
    const newprice = oldprice + priceadd;
    this.setState({ totalPrice: newprice, ingredients: updatedIngredients });
    this.updatePurchasedState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return null;
    const updateCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updateCount;
    const priceremove = ING_PRICES[type];
    const oldprice = this.state.totalPrice;
    const newprice = oldprice - priceremove;
    this.setState({ totalPrice: newprice, ingredients: updatedIngredients });
    this.updatePurchasedState(updatedIngredients);
  };

  purchaseHandler=()=>{
    this.setState({purchasing:true});
  }

  purchaseCancelHandler=()=>{
    this.setState({purchasing:false});
  };

  purchaseContinueHandler=()=>{
    alert('continue');
  };


  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for(let key in disabledInfo)
    {
      disabledInfo[key]=disabledInfo[key]<=0;
    }

      // update disabledInfo state as follows salad:true meat:false


    return (
      <Aux>
        
        <Burger ingredients={this.state.ingredients} />
        <Modal 
        show={this.state.purchasing} 
        modalClosed={this.purchaseCancelHandler}> 
          <OrderSummary 
          ingredients={this.state.ingredients}
          purchasecancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <BuildControls
          ingredientAdd={this.addIngredientsHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
