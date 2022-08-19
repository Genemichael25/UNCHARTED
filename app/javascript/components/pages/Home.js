import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    return <>
            <h1>
              UNCHARTED
            </h1>
             <p> 
              Revisiting trip highlights and those carefree moments has never been easier! For the first time ever, avid or aspiring travelers can now archive previous trips using photos and personal details. 'Uncharted' combines travel mapping and the art of journaling into an interactive life story experience. Document old memories, while creating new ones all in place! So whether you want a way to keep track of already visited destinations, searching for location inspiration, or are looking for resources on how to make traveling less complicated and more affordable; 'Uncharted' has your back.
             </p>
             <Button>
                <NavLink to={"/sevenwonders/"}>
                  Need Inspiration?
                </NavLink>
             </Button>
           </>
  }
}

export default Home;
