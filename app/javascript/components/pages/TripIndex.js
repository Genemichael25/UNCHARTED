import React, { Component } from "react";
import {
	Button,
	Card,
	CardTitle,
	Col,
	Row,
	CardImg,
	Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class TripIndex extends Component {
	render() {
		return (
			<>
				<Container className="indexText">
					<h3>Review My Trips</h3>
					<p>List of all my destinations!</p>
				</Container>

				<Row className="trips-row">
					{this.props.trips &&
						this.props.trips.map((trip) => {
							return (
								<Col key={trip.id} sm="4">
									<Card className="trip-tile" body>
										<CardImg
											top
											width="100%"
											src={trip.image}
											alt="Card image cap"
										/>
										<CardTitle className="trip-basic-info">
											<br></br>
											{trip.name}
											<br></br>
											{trip.location}
											<br></br>
											Date: {trip.from} to {trip.to}
											<br></br>
											<p>
												<NavLink to={`/tripshow/${trip.id}`}>
													<Button className="s-button">More Details</Button>
												</NavLink>
											</p>
										</CardTitle>
									</Card>
								</Col>
							);
						})}
				</Row>
			</>
		);
	}
}
export default TripIndex;
