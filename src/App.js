import React, { useEffect, Suspense } from "react";
import Layout from "./containers/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";


const Checkout = React.lazy(() => {
  return import("./containers/CheckOut/CheckOut");
});

const Orders = React.lazy(() => {
  return import("./components/Orders/Orders");
});

const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});
const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);
  let routes = (
    <>
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={BurgerBuilder} />
      <Redirect to="/" />
    </>
  );

  if (props.inAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
