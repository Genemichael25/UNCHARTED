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
import SevenWonders from "./pages/SevenWonders"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trips: [],
    }
  }
  componentDidMount() {
    this.readTrip()
  }
  readTrip = () => {
    fetch("/trips")
    .then((response) => response.json())
    .then((payload) => this.setState({ trips: payload }))
    .catch((errors) => console.log("Trip read errors: ", errors))
  }
  updateTrip = (trip, id) => {
    fetch(`/trips/${id}`, {
      body: JSON.stringify(trip),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readTrip())
      .catch((errors) => console.log("Trip update errors: ", errors))
  }

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
        <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tripindex" component={TripIndex} />
          <Route path="/tripshow" component={TripShow} />
          <Route path="/tripnew" component={TripNew} />
          <Route path="/tripedit/:id"
            render={(props) => {
              let id = +props.match.params.id
              let trip = this.state.trips.find(
                trip => trip.id === id
              )
              return <TripEdit trip={trip} updateTrip={this.updateTrip} />
            }} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/sevenwonders" component={SevenWonders} />
          <Route path="/externalresources" component={ExternalResources} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
      </>
    )
  }
}

export default App;
