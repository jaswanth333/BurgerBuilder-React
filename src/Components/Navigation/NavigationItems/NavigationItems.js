import React from "react";
import styles from "./NavigationItems.module.css";
import Navigationitem from "../NavigationItems/NavigationItem/NavigationItem"



const navigationitems = (props) => (
<ul className={styles.Navigationitems}>

  <Navigationitem link="/" active>Burgerbuilder</Navigationitem>
  <Navigationitem link="/">Checkout</Navigationitem>
</ul>
);

export default navigationitems;