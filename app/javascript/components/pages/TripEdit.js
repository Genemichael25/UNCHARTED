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
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.updatedTrip.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.updatedTrip.location}
            />
          </FormGroup>
          <FormGroup>
            <Label for="from">From</Label>
            <Input
              type="text"
              name="from"
              onChange={this.handleChange}
              value={this.state.updatedTrip.from}
            />
          </FormGroup>
          <FormGroup>
            <Label for="to">To</Label>
            <Input
              type="text"
              name="to"
              onChange={this.handleChange}
              value={this.state.updatedTrip.to}
            />
          </FormGroup>
          <FormGroup>
            <Label for="travel_buddies">Travel Buddies</Label>
            <Input
              type="text"
              name="travel_buddies"
              onChange={this.handleChange}
              value={this.state.updatedTrip.travel_buddies}
            />
          </FormGroup>
          <FormGroup>
            <Label for="comments">Comments</Label>
            <Input
              type="text"
              name="comments"
              onChange={this.handleChange}
              value={this.state.updatedTrip.comments}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.updatedTrip.image}
            />
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
