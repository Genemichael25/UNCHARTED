import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TripIndex from "./pages/TripIndex";
import TripShow from "./pages/TripShow";
import TripNew from "./pages/TripNew";
import TripEdit from "./pages/TripEdit";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ExternalResources from "./pages/ExternalResources";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    console.log("logged_in:", logged_in);
    console.log("current_user:", current_user);
    console.log("new_user_route:", new_user_route);
    console.log("sign_in_route:", sign_in_route);
    console.log("sign_out_route:", sign_out_route);
    return (
      <>
        <h1>UNCHARTED App</h1>
      </>
    );
  }
}

export default App;
