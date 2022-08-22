
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";



class TripShow extends Component {

  render() {
    let { trip } = this.props;
    return (
      <>
        <div>
          {trip && 
          <Card>
            <CardImg className="trip-image" src={trip.image} alt="trip card image" />
            <CardBody className="trip-detail-body">

              <CardSubtitle>{trip.name}</CardSubtitle>
              <CardTitle>{trip.location}</CardTitle>
              <br />
              <CardText>Dates: {trip.from} to {trip.to}</CardText>
              <CardText>Travel Buddies: {trip.travel_buddies}</CardText>
              <CardText>{trip.comments}</CardText>
              <NavLink to={`/tripedit/${trip.id}`}>
                <Button>Update trip</Button>
              </NavLink>
              <NavLink to={`/tripindex`}>
              <Button onClick={() => this.props.deleteTrip(trip.id)}>
                Delete Trip
              </Button>
              </NavLink>
            </CardBody>
          </Card>
          }
        </div>
      </>
    )
  }
}

export default TripShow;
