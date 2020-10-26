import React from "react";
import styles from "./Logo.module.css";
import BurgerLogo from "../../assets/Images/logo.jpg"


const logo = (props) => (
  <div className={styles.Logo} style={{height:props.height}}>
    <img src={BurgerLogo} alt="Logo"/>
  </div>
);

export default logo;
