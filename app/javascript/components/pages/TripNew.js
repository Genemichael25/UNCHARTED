import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class TripNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTrip: {
        name: '',
        location: '',
        from: '',
        to: '',
        travel_buddies: '',
        comments: '',
        image: '',
        user_id: this.props.current_user.id
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let {newTrip} = this.state
    newTrip[e.target.name] = e.target.value
    this.setState({newTrip: newTrip})
  }

  handleSubmit = () => {
    this.props.createTrip(this.state.newTrip)
    this.setState({submitted: true})
  }
  render() {
    return (
      <>
        <h3>Log Trip</h3>
        <Form>
        <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newTrip.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location:</Label>
            <Input
              type="text"
              name="location"
              onChange={this.handleChange}
              value={this.state.newTrip.location}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fromDate">From:</Label>
            <Input 
              type="date" 
              name="from" 
              id="fromDate" 
              placeholder="date placeholder" 
              onChange={this.handleChange}
              value={this.state.newTrip.from}
            />
          </FormGroup>
          <FormGroup>
            <Label for="to">To:</Label>
            <Input 
              type="date" 
              name="to" 
              id="toDate" 
              placeholder="date placeholder" 
              onChange={this.handleChange}
              value={this.state.newTrip.to}
            />
          </FormGroup>
          <FormGroup>
            <Label for="travel_buddies">Travel Buddies:</Label>
            <Input
              type="text"
              name="travel_buddies"
              onChange={this.handleChange}
              value={this.state.newTrip.travel_buddies}
            />
          </FormGroup>
          <FormGroup>
            <Label for="comments">Comments:</Label>
            <Input
              type="textarea"
              name="comments"
              onChange={this.handleChange}
              value={this.state.newTrip.comments}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image:</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newTrip.image}
            />
          </FormGroup>
          <Button
            name="submit"
            onClick={this.handleSubmit}>
            Submit
          </Button>
          {this.state.submitted && <Redirect to="/tripindex" />}
        </Form>

      </>
    )
  }
}

export default TripNew;
