import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <a className={"about-us"} href={`/aboutus`}>
            About Us
          </a>
            ©Uncharted 2022 | Code Empire
          <a className={"externalresources"} href={`/externalresources`}>
            External Resources
          </a>
        </footer>
      </>
    )
  }
}

export default Footer
          
          
