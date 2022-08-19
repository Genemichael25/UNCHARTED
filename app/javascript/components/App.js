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
	constructor(props) {
		super(props);
		this.state = {
			trips: [],
		};
	}

	componentDidMount() {
		this.readTrip();
	}

	readTrip = () => {
		fetch("/trips")
			.then((response) => response.json())
			.then((payload) => this.setState({ trips: payload }))
			.catch((errors) => console.log("Trip read errors: ", errors));
	};
	render() {
		const {
			logged_in,
			current_user,
			new_user_route,
			sign_in_route,
			sign_out_route,
		} = this.props;

		return (
			<>
				<Router>
					<Header />
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
								);
								return (
									<ProtectedTripIndex
										trips={myListings}
										deleteTrip={this.deleteTrip}
									/>
								);
							}}
						/>
						<Route path="/tripshow" component={TripShow} />
						<Route path="/tripnew" component={TripNew} />
						<Route path="/tripedit" component={TripEdit} />
						<Route path="/aboutus" component={AboutUs} />
						<Route path="/externalresources" component={ExternalResources} />
						<Route component={NotFound} />
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
