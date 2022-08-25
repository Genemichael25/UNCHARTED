import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class TripEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatedTrip: {
        name: this.props.trip?.name || "",
        location: this.props.trip?.location || "",
        from: this.props.trip?.from || "",
        to: this.props.trip?.to || "",
        travel_buddies: this.props.trip?.travel_buddies || "",
        comments: this.props.trip?.comments || "",
        image: this.props.trip?.image || "",
        user_id: this.props.trip?.user_id
      },
      submitted: false,
    }
  }

  handleChange = (e) => {
    let { updatedTrip } = this.state
    updatedTrip[e.target.name] = e.target.value;
    this.setState({ updatedTrip: updatedTrip })
  }

  handleSubmit = () => {
    this.props.updateTrip(this.state.updatedTrip, this.props.trip.id)
    this.setState({ submitted: true })
  }

  render() {
    return (
<>
       <h3 className="logtriptext">Edit Trip</h3>
        <Form>
        <div className="namelocation">
          <FormGroup className="name-input">
            <div className="groupinputlabel">
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.updatedTrip.name}
            />
            </div>
          </FormGroup>
          <FormGroup className="location-input">
            <div className="groupinputlabel">
            <Label for="location">Location:</Label>
            <Input
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.updatedTrip.location}
            />
            </div>
          </FormGroup>
         </div>
         <div className="namelocation"> 
          <FormGroup className="frominput">
            <div className="groupinputlabel">
            <Label for="fromDate">From:</Label>
            <Input 
              type="date" 
              name="from" 
              id="fromDate"  
              onChange={this.handleChange}
              value={this.state.updatedTrip.from}
              />
            </div>
          </FormGroup>
          <FormGroup className="toinput">
            <div className="groupinputlabel">
            <Label for="to">To:</Label>
            <Input 
              type="date" 
              name="to" 
              id="toDate"  
              onChange={this.handleChange}
              value={this.state.updatedTrip.to}
              />
            </div>
          </FormGroup>
        </div>
          <FormGroup className="travelbuddiesinput">
            <div className="groupinputlabel">
            <Label for="travel_buddies">Travel Buddies:</Label>
            <Input
              type="text"
              name="travel_buddies"
              onChange={this.handleChange}
              value={this.state.updatedTrip.travel_buddies}
            />
            </div>
          </FormGroup>
          <FormGroup className="commentsinput">
            <div className="groupinputlabel">
            <Label for="comments">Comments:</Label>
            <Input
              type="textarea"
              name="comments"
              onChange={this.handleChange}
              value={this.state.updatedTrip.comments}
            />
            </div>
          </FormGroup>
          <FormGroup className="imageinput">
            <div className="groupinputlabel">
            <Label for="image">Image:</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.updatedTrip.image}
            />
            </div>
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Update Trip
          </Button>
          {/* if submitted is true then go to tripindex page  */}
          {this.state.submitted && (
            <Redirect to={`/tripshow/${this.props.trip.id}`} />
          )}
        </Form>
      </>
    )
  }
}

export default TripEdit;
