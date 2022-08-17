// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import Home from "./Home";

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

// _________________________TESTING____________________________________

describe("When Home renders", () => {
    it("displays a heading", () => {
      const home = shallow(<Home />)
      const homeHeading = home.find("h1");
      expect(homeHeading.text()).toEqual("UNCHARTED");
    })
})

it("displays text", () => {
    const home = shallow(<Home />)
    const homeDescription = home.find("p")
    expect(homeDescription.text()).toEqual("Revisiting trip highlights and those carefree moments has never been easier! For the first time ever, avid or aspiring travelers can now archive previous trips using photos and personal details. 'Uncharted' combines travel mapping and the art of journaling into an interactive life story experience. Document old memories, while creating new ones all in place! So whether you want a way to keep track of already visited destinations, searching for location inspiration, or are looking for resources on how to make traveling less complicated and more affordable; 'Uncharted' has your back.")
})