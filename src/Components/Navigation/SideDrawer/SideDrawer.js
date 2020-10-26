import React from "react";
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems"
import styles from "./SideDrawer.module.css"
import BackDrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../../hoc/Auxillary"
//import styles from "./NavigationItem.module.css"

//(props) => { }; we use function return JSX

const sidedawer = (props) => {       
let attachedClass=[styles.SideDrawer,styles.Close];
if (props.open)
{
  attachedClass = [styles.SideDrawer,styles.Open]
}
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed}/>
    <div className={attachedClass.join(' ')}>
      <div className={styles.Logo}>
         <Logo/>
      </div>
 
      <nav>
        <NavigationItems />
      </nav>
    </div>  
    </Aux>
    
  );

};


export default sidedawer;