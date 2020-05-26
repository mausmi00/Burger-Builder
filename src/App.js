import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js";
import CheckOut from "./containers/CheckOut/CheckOut";
import { Route } from "react-router-dom";
import Orders from './components/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={CheckOut} />
          <Route path = '/orders' component={Orders}/>
        </Layout>
      </div>
    );
  }
}

export default App;
