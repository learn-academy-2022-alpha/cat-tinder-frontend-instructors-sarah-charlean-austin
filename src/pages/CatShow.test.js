import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter()})

describe("When CatShow renders", () => {
  let cat = {
    id: 3,
    name: "Toast",
    age: 1,
    enjoys: "getting all the attention",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
  it("displays a header", () => {
    const catShow = shallow(<CatShow cat={cat} />)
    const showHeading = catShow.find("h2")
    expect(showHeading.text()).toEqual("🐈‍⬛")
  })
  it("displays a card", () => {
    const catShow = shallow(<CatShow cat={cat}/>)
    const card = catShow.find("Card")
    expect(card.length).toEqual(1)
    const cardTitle = catShow.find("CardTitle")
    expect(cardTitle.length).toEqual(1)
    const cardText = catShow.find("CardText")
    expect(cardText.length).toEqual(2)
    const showImage = catShow.find("img")
    expect(showImage.length).toEqual(1)
  })
})
