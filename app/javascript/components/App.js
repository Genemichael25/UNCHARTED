import React, { Component } from "react";
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
import SevenWonders from "./pages/SevenWonders";
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

  createTrip = (newTrip) => {
    fetch("/trips", {
      body: JSON.stringify(newTrip),
      headers: {
        "Content-type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    // .then(() => this.readTrip())
    .then(payload => this.setState({trips: payload}))
    .catch(errors => console.log("New Trip Error", errors))

  }


  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props

    return (
      <>
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/tripindex"
            render={(props) => (
              <TripIndex {...props} trips={this.state.trips} />
            )}
          />
          <Route
            path="/mytrips"
            render={(props) => {
              let myTrips = this.state.trips.filter(
                (trip) => trip.user_id === current_user.id
              )
              return (
                <ProtectedTripIndex
                  trips={myListings}
                  deleteTrip={this.deleteTrip}
                />
              )
            }}
          /> 
          <Route path="/tripshow/:id" render={(props) =>{
              let id = +props.match.params.id
              let trip = this.state.trips.find(trip => trip.id === id)
              return <TripShow trip={trip} />
            }}/>
          <Route path="/tripedit/:id"
            render={(props) => {
              let id = +props.match.params.id
              let trip = this.state.trips.find(
                trip => trip.id === id)
              return <TripEdit trip={trip} updateTrip={this.updateTrip} />
            }} />
          <Route path="/tripnew" render={() => 
            <TripNew 
            createTrip={this.createTrip} 
            current_user = {this.props.current_user}/> 
            }/>
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

export default App
