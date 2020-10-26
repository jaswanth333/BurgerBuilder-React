import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
  let trasformedingredients = Object.keys(props.ingredients)
    .map((ingkey) => {
      return [...Array(props.ingredients[ingkey])].map((_, i) => {
        return <BurgerIngredients key={ingkey + i} type={ingkey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);

  if (trasformedingredients.length === 0) {
    trasformedingredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredients type="bread-top" />
      {trasformedingredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
