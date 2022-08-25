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
    let { trip } = this.props
    return (
      <>
        <div>
          {trip && (
            <Card className="showcard">
              <CardImg
                className="trip-image"
                src={trip.image}
                alt="trip card image"
              />
              <CardBody className="trip-detail-body">
                <CardTitle className="nameofplace">{trip.name}</CardTitle>
                <CardSubtitle>{trip.location}</CardSubtitle>
                <hr></hr>
                <CardText>
                  Dates: {trip.from} to {trip.to}
                </CardText>
                <CardText>
                  Travel Buddies: {trip.travel_buddies}
                </CardText>
                <CardText>{trip.comments}</CardText>
                <NavLink to={`/tripedit/${trip.id}`}>
                  <Button 
                    style={{ marginLeft: "15%" }}>
                      Edit Trip
                  </Button>
                </NavLink>
                <NavLink to={`/tripindex`}>
                  <Button
                    onClick={() => this.props.deleteTrip(trip.id)}
                    style={{ marginLeft: "20%" }}
                  >
                    Delete Trip
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          )}
        </div>
      </>
    )
  }
}

export default TripShow
