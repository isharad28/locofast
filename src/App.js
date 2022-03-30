import React,{useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Internal imports
import history from "./Store/history/index";
import routes from "./Routes/Routes";
import PrivateRoute from "./Routes/PrivateRoutes";
import LoginRoute from "./Routes/LoginRoute";
import Loader from './Components/Loader';

 import {storeProductsList} from './Store/action/products';
import {products,pricingInfo}from '../src/utils/productData'

// Style imports
import "./App.css";
import "./index.css";
import ItemCardAtCheckout from "./Container/ItemCardAtCheckout/ItemCardAtCheckout";
// import SignupModal from "./Components/Modal/SignupModal/SignupModal";
// import ReactGA from 'react-ga';
// import ReactPixel from 'react-facebook-pixel';
const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};
const resolvePrivateRoutes = (routes) => {
  if (routes && Array.isArray(routes)) {
    return routes.map((route) => {
      if (route.isPrivate) {
        route.render = (props) => (
          <PrivateRoute component={route.component} {...props} />
        );
      }
      if (route.isAuth) {
        route.render = (props) => (
          <LoginRoute   component={route.component} {...props} />
        );
      }
      if (route.routes) {
        resolvePrivateRoutes(route.routes);
      }
      return route;
    });
  }
};
function App(props) {
  useEffect(() => {
    console.log(props,products,pricingInfo)
    props.storeProductsList(products)
   }, [])
  
  return (
    <>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      {renderRoutes(resolvePrivateRoutes(routes))}
    </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.products.productList,
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    storeProductsList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
