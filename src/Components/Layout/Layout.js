import React,{Component} from "react";
import Aux from "../../hoc/Auxillary";
import styles from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class  Layout extends Component {
  state={
    showSideDrawer:true,

  }
  sideDrawerClosedHandler =()=>{
    this.setState({showSideDrawer:false})

  }
  render()
  {
  return (
    <Aux>
    <Toolbar/>
    <SideDrawer open= {this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
    <main className={styles.content}>{this.props.children}</main>
  </Aux>
  );
}
} 
  


export default Layout;
