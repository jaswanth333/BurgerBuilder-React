import React from "react";
import styles from "./NavigationItem.module.css"


const navigationitem = (props) => (

<li className={styles.Navigationitem}>
  <a href={props.link} className={styles.active?styles.active:null}>{props.children}</a>
  </li>

);

export default navigationitem;