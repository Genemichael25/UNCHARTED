import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <NavLink to={`/aboutus`}>
            About Us
          </NavLink>
          <div className="org-footer">
          ©Uncharted 2022 | Code Empire
          </div>
          <NavLink to={`/externalresources`}>
            External Resources
          </NavLink>
        </footer>
      </>
    )
  }
}

export default Footer
