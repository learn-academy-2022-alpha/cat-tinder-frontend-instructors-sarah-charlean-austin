// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from './Header.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header Renders", () => {
  it("displays a Navlink", () => {
    const renderedHeader = shallow(<Header />)
    const headerNavLinks = renderedHeader.find("NavLink")
    expect(headerNavLinks.length).toEqual(3)
  })
})