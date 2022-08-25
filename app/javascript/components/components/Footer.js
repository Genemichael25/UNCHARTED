import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <NavLink className={"about-us"} to={`/aboutus`}>
            About Us
          </NavLink>
            ©Uncharted 2022 | Code Empire
          <NavLink className={"externalresources"} to={`/externalresources`}>
            External Resources
          </NavLink>
        </footer>
      </>
    )
  }
}

export default Footer
          
          
