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
import SevenWondersSlides from "./pages/SevenWondersSlides";
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
    .then(() => this.readTrip())
    .catch(errors => console.log("New Trip Error", errors))
  }

  deleteTrip = (id) => {
    fetch (`/trips/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => this.readTrip())
    .catch((errors) => console.log("Trip delete errors", errors))
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
          
          {logged_in && (
          <>
          <Switch>
            <Route
              exact path="/tripindex" render={(props) => {
                let myTrips = this.state.trips.filter(
                  (trip) => trip.user_id === current_user.id)
                return (
                <TripIndex {...props} trips={myTrips} />)
              }}
            />
            <Route exact path="/tripshow/:id" render={(props) =>{
              let id = +props.match.params.id
              let trip = this.state.trips.find(trip => trip.id === id)
              return <TripShow trip={trip} deleteTrip={this.deleteTrip} />
            }}/>  
            <Route exact path ={"/tripdelete/id"} />
            <Route exact path="/tripedit/:id"
              render={(props) => {
                let id = +props.match.params.id
                let trip = this.state.trips.find(
                  trip => trip.id === id)
                return <TripEdit trip={trip} updateTrip={this.updateTrip} />
              }} />
            <Route exact path="/tripnew" render={() => 
              <TripNew 
              createTrip={this.createTrip} 
              current_user = {this.props.current_user}/> 
              }/> 
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/sevenwondersslides" component={SevenWondersSlides} />
            <Route exact path="/externalresources" component={ExternalResources} />  
            <Route component={NotFound} />
           </Switch>
          </> 
           )} 

          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/sevenwondersslides" component={SevenWondersSlides} />
          <Route exact path="/externalresources" component={ExternalResources} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
      </Router>
      </>
    )
  }
}

export default App
//test