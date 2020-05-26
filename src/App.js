import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js";
import CheckOut from "./containers/CheckOut/CheckOut";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={CheckOut} />
        </Layout>
      </div>
    );
  }
}

export default App;
