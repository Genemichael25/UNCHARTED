import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ExternalResources from './ExternalResources'
Enzyme.configure({ adapter: new Adapter() })

describe("When ExternalResources renders", () => {
    let externalResourcesRender

    beforeEach(()=> {
        externalResourcesRender = shallow(<ExternalResources />)
    })

  it("displays a heading", () => {
    const externalResourcesRenderHeading = externalResourcesRender.find("h2")
    expect(externalResourcesRenderHeading.text()).toEqual("External Resources")
  })

  it("displays 3 sections with H6 headings", () => {
    const externalResourcesCards = externalResourcesRender.find("h6")
    expect(externalResourcesCards.length).toEqual(3)
  })
})