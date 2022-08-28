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
        <h3 className="logtriptext">Log Trip</h3>
        <Form>
        <div className="namelocation">
          <FormGroup className="name-input">
            <div className="groupinputlabel">
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.newTrip.name}
              placeholder= "Ex:Grand Canyon"
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
              value={this.state.newTrip.location}
              placeholder= "Ex:Arizona"
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
              placeholder="date placeholder" 
              onChange={this.handleChange}
              value={this.state.newTrip.from}
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
              placeholder="date placeholder" 
              onChange={this.handleChange}
              value={this.state.newTrip.to}
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
              value={this.state.newTrip.travel_buddies}
              placeholder= "Who joined you?"
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
              value={this.state.newTrip.comments}
              placeholder= "Had something spectacular happen? Felt some inspiration? Made memories? This section is all for you!"
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
              value={this.state.newTrip.image}
              placeholder= "A picture is worth a thousand words!!"
            />
            </div>
          </FormGroup>
          <Button 
            className="submit-edit-button"
            name="submit"
            onClick={this.handleSubmit}
            style={{marginLeft: "48%", marginBottom:"10px"}}
            >
            Submit
          </Button>
          {this.state.submitted && <Redirect to="/tripindex" />}
        </Form>

      </>
    )
  }
}

export default TripNew;
            
