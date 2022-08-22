import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SevenWonders from './SevenWonders'
Enzyme.configure({ adapter: new Adapter() })

describe("When SevenWonders renders", () => {
    let sevenWondersRender

    beforeEach(()=> {
        sevenWondersRender = shallow(<SevenWonders />)
    })

  it("displays a heading", () => {
    const sevenWondersRenderHeading = sevenWondersRender.find("h3")
    expect(sevenWondersRenderHeading.text()).toEqual("Seven Wonders of the World")
  })

  it("displays 7 cards, one for each wonder", () => {
    const sevenWondersCards = sevenWondersRender.find("Card")
    expect(sevenWondersCards.length).toEqual(7)
  })
})