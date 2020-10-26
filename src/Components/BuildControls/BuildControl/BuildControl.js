import React from "react";
import styles from "./BuildControl.module.css";

const buildcontrol = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less} onClick={props.removed} disabled={props.disabled}> 
      less
    </button>
    <button className={styles.More} onClick={props.added} >
      More
    </button>
  </div>
);

export default buildcontrol;
