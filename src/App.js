import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import BurderBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurderBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
