import React from "react"
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import Header from "./Header"
Enzyme.configure({ adapter: new Adapter() })

describe(" <Navbar /> ", () => {
    it("displays a Navbar with options", () => {
      const header = shallow(<Header />);
      const renderedHeader = header.find("Navbar");
      expect(renderedHeader.text()).toEqual("<Navbar />");
    });
  });