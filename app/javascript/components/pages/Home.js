import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
    <>
      <div className="middlebar">
        <div className="box">
          <img src="assets/vintage.webp" />
        </div>
        <div className="title">
          <h1>Wanna Get Away?</h1>
        </div>
        <div className="text text--blur">
          <p>
            Revisiting trip highlights and those carefree moments has never been easier! For the first time ever, avid or aspiring travelers can now archive previous trips using photos and personal details. 'Uncharted' combines travel mapping and the art of journaling into an interactive life story experience. Document old memories, while creating new ones all in place! So whether you want a way to keep track of already visited destinations, searching for location inspiration, or are looking for resources on how to make traveling less complicated and more affordable; 'Uncharted' has your back.
          </p>
        </div>
        <br />
        < div className="button">
          <Button>
            <NavLink to={"/sevenwonders/"}>
              Need Inspiration?
            </NavLink>
          </Button>
        </div>
      </div>
    </>
    )
  }
}

export default Home;
