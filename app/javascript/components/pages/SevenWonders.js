import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import wonders from "./SevenWondersInfo"

class SevenWonders extends Component {
  render() {
    return (
      <>
        <h3>Seven Wonders of the World</h3>
        <Row className="sevencard">
          {wonders &&
            wonders.map((wonders) => {
              return (
                <Col sm="4" style={{ paddingBottom: "10px" }}>
                  <Card className="card">
                    <CardImg
                      className="sevenpic"
                      top-width="100%"
                      src={wonders.image}
                      alt="seven wonders pic"
                    />
                    <CardBody className="sevenwondersbody">
                      <CardTitle className="nameofplace">
                        {wonders.name}
                      </CardTitle>
                      <hr></hr>
                      <CardSubtitle>{wonders.location}</CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </>
    )
  }
}

export default SevenWonders
