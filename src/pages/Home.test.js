// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home Renders", () => {
  it("displays a heading", () => {
    const renderedHome = shallow(<Home />)
    const homeHeading = renderedHome.find("h3")
    expect(homeHeading.text()).toEqual('Welcome to Cat Tinder!')
  })
  it("displays an image", () => {
    const renderedHome = shallow(<Home />)
    const homeImage = renderedHome.find("img")
    expect(homeImage.length).toEqual(1)
  })
})