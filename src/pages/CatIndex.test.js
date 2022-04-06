import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatIndex from './CatIndex.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatIndex Renders", () => {
  it("displays a heading", () => {
    const catIndex = shallow(<CatIndex />)
    const indexHeader = catIndex.find("h2")
    expect(indexHeader.text()).toEqual("Find your purrfect match")
  })
})
