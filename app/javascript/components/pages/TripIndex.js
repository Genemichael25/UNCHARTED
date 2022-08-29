import React, { Component } from "react";
import { Button, Card, CardTitle, Col, Row, CardImg, Container, Grid } from "reactstrap";
import { NavLink } from "react-router-dom";
import { format } from "date-fns"

class TripIndex extends Component {
render() {
  return (
  <>
    <div class="body"> 
      <Container className="indexText">
        <h3 id="index-title-text">
          My Adventures
        </h3>
        <p id="index-subtitle-text">
          Everywhere I've been...
        </p>
      </Container>
        <Row className="trips-row">
          {this.props.trips &&
            this.props.trips.map((trip) => {
              return (
                  <Col 
                    key={trip.id} 
                    sm="4" 
                    className="col-lg-4 d-flex align-items-stretch">
                  <Card className="trip-title" body>
                    <CardImg 
                      id="index-card-images"
                      top
                      width="100%"
                      src={trip.image}
                      alt="Card image Cap"
                    />
                    <CardTitle className="trip-basic-info">
                      <div className="nameofplace">
                        {trip.name}
                      <br></br>
                      </div>
                      <div className="location-text">
                        {trip.location}
                      </div>
                      <div className="date-text"> 
                      <hr></hr>
                        Date: {format(new Date(trip.from), "MM/dd/yyyy")} to {format(new Date(trip.to), "MM/dd/yyyy")}
                      </div>
                      <br></br>
                      <p>
                        <div class="col-md-12 text-center"> 
                        <NavLink 
                            to={`/tripshow/${trip.id}`}>
                          <Button href="#" className="s-button">
                            More Details
                          </Button>
                        </NavLink>
                        </div>
                      </p>
                    </CardTitle>
                  </Card>
                </Col>
              )
            })}
          </Row>
      </div>
    </>
    )
  }
}
export default TripIndex
//test