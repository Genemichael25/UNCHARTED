import React, { Component } from "react";
import randomTrip from "./randomTripInfo";

class RandomTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: randomTrip,
      name: randomTrip[0].name,
      img: randomTrip[0].img,
    }
  }

  getCity = () => {
    let randomNumber = Math.floor(Math.random() * this.state.data.length)
    this.setState({
      name: this.state.data[randomNumber].name,
      img: this.state.data[randomNumber].img,
    })
    console.log(randomNumber)
  }

  render() {
    return (
      <>
        <h3 className="randomtripheader">Feeling Spontaneous?</h3>
        <button onClick={this.getCity} className="randomtripbutton">
          Randomize Trip!
        </button>
        <div className="randomtrip">
          <img src={this.state.img} className="randomtripimage" />
          <div className="randomtriptext">
            <p>{this.state.name}</p>
          </div>
        </div>
      </>
    )
  }
}

export default RandomTrip;
