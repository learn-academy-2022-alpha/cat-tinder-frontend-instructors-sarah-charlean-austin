import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound Renders", () => {
  it("displays a heading", () => {
    const renderedNotFound = shallow(<NotFound />)
    const notFoundHeading = renderedNotFound.find("h3")
    expect(notFoundHeading.text()).toEqual('Ooops, no cats here!')
  })
})