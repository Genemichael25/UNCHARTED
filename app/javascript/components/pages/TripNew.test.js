// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import TripNew from "./TripNew";

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

// _________________________TESTING____________________________________

describe("When TripNew renders", () => {
    let tripNewRender
    let props = {current_user: {id: 1}}

    beforeEach(()=> {
        tripNewRender = shallow(<TripNew {...props}/>)
    })

    it("displays a heading", () => {
      const tripHeading = tripNewRender.find("h3")
      expect(tripHeading.text()).toEqual("Log Trip")
    })
    
    it("displays a form", () => {
        const tripNewForm = tripNewRender.find("Form")
        expect(tripNewForm.length).toEqual(1)
    })

    it("displays 7 form groups", () => {
        const tripNewFormGroups = tripNewRender.find("FormGroup")
        expect(tripNewFormGroups.length).toEqual(7)
      })

    it("displays a submit button", () => {
    const tripNewSubmitButton = tripNewRender.find("Button")
    expect(tripNewSubmitButton.length).toEqual(1)
    })
})