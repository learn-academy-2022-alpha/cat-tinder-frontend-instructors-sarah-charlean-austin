import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatNew from './CatNew.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew Renders", () => {
  it("displays a heading", () => {
    const catNew = shallow(<CatNew />)
    const newHeader = catNew.find("h2")
    expect(newHeader.text()).toEqual("Welcome to Meow Mixer")
  })
  it("displays a form", () => {
    const catNew = shallow(<CatNew />)
    const newForm = catNew.find("Form")
    expect(newForm.length).toEqual(1)
  })
  it("displays a cat name input", () => {
    const catNew = shallow(<CatNew />)
    const catNewNameInput = catNew.find("[name='name']")
    expect(catNewNameInput.length).toEqual(1)
  })
  it("displays a cat age input", () => {
    const catNew = shallow(<CatNew />)
    const catNewAgeInput = catNew.find("[name='age']")
    expect(catNewAgeInput.length).toEqual(1)
  })
  it("displays a cat enjoys input", () => {
    const catNew = shallow(<CatNew />)
    const catNewEnjoysInput = catNew.find("[name='enjoys']")
    expect(catNewEnjoysInput.length).toEqual(1)
  })
  it("displays a cat image input", () => {
    const catNew = shallow(<CatNew />)
    const catNewImageInput = catNew.find("[name='image']")
    expect(catNewImageInput.length).toEqual(1)
  })
})
