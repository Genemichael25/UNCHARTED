import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs'
Enzyme.configure({ adapter: new Adapter() })

describe("When AboutUs renders", () => {
    let aboutUsRender

    beforeEach(()=> {
        aboutUsRender = shallow(<AboutUs />)
    })

  it("displays 4 cards, one for each team member", () => {
    const aboutUsCards = aboutUsRender.find("Card")
    expect(aboutUsCards.length).toEqual(4)
  })
})