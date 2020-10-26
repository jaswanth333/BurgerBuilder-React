import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Total Price:<strong>{props.price.toFixed(2)}</strong></p>  
    {/* to fixed is inbuilt method */}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdd(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button className={styles.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
  </div>
);

export default buildControls;
