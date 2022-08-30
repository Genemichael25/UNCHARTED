import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
    <>
      <div className="image">
          <img 
              id="homepage-img-background"
              src="public/vintage.webp" 
          />  
          <h1 id="home-title-location"><span>
            Wanna Get Away?
          </span></h1>
      <div className="text text--blur">
          <p id="homepage-overview-text-styling">
            'Uncharted' combines travel mapping and the art of journaling into an interactive life story experience... Revisiting trip highlights and those carefree moments has never been easier! Document old memories, while creating new ones all in place! 
          </p>
        </div>
        <div className="button"> 
          <Button id="button-style">
            <NavLink 
              className="button-text" 
              to={"/sevenwondersslides/"}>
              Need Inspiration?
            </NavLink>
          </Button> 
          <br />
        </div>
      </div>
    </>
    )
  }
}

export default Home
