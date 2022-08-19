// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme"

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16"

// Imports in the component we are going to be testing.
import TripShow from "./TripShow"

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })




describe(" <Card> ", () => {
  const trip = {
    trips1: {
      name: 'Grand Canyon',
      location: 'Arizona',
      from: 20220703,
      to: 20220705,
      travel_buddies: 'Code Empire Team',
      comments: 'Had a blast with the team after launching our app.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg'
    }
  };
  let renderedTripShow;

  beforeEach(() => {
    renderedTripShow = shallow(<TripShow trip={trip} />);
  });
  it("displays a profile for a trip", () => {
    const TripShowCard = renderedTripShow.find("Card");
    expect(TripShowCard.length).toEqual(1);
  });
});