# Cat Tinder Alpha 4/4/22
## Trello
- Kanban board for agile development
- Allows us to keep track of Product Goals including
  - Minimum Viable Product (MVP)
  - Backlogs
  - Currently being worked on items
  - Completed Items
  - Who is in charge of which features
  - How long/ which steps each feature should rquire

## Create React App - Initial Commit
```
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
$ yarn start
```

# Github Process
- "Hey I have pushed up the initial commit of the app for Instructors. Can I have some please put branch protections on our Repository linked here:"


## Developer/ User Stories
As a developer, I have been commissioned to create an application where a user can see cute cats looking for friends. As a user, I can see a list of cats. I can click on a cat and see more information about that cat. I can also add cats to the list of cats looking for friends. If my work is acceptable to my client, I may also be asked to add the ability to remove a cat from the list as well as edit cat information.
- As a developer, I can create a directory in src called pages.
- As a developer, I can create a directory in src called components.
- As a developer, I can create a directory in src called assets.
- As a developer, I can create a file called Header.js in the components directory.
  - Called the Header in App.js
    `import Header from './components/Header'`
    `<Header/>`
As a developer, I can create a file called Footer.js in the components directory.
- As a developer, I can create a file called Home.js in the pages directory.
- As a developer, I can create a file called CatIndex.js in the pages directory.


```
$ yarn add bootstrap
$ yarn add reactstrap
```

- As a developer, I can add a file to src called mockCats.js and add an array of cat objects.

`yarn add react-router-dom@5.3.0`

- As a developer, I can create a file called CatIndex.js in the pages directory.
- As a developer, I can create a file called CatShow.js in the pages directory.
- As a developer, I can create a file called CatNew.js in the pages directory.
- As a developer, I can create a file called CatEdit.js in the pages directory.
- As a developer, I can create a file called NotFound.js in the pages directory.
- As a developer, I can use Reactstrap to create the header UI.
- As a developer, I can use Reactstrap to create the footer UI.
- As a developer, I can import the header and footer to all the page components.
- As a developer, I can add react-router-dom@5.3.0 to my application.
- As a developer, I can add routes to be able to navigate manually to all pages.
- As a developer, I can add some styling to the Home component.

# Testing with Jest and Enzyme
- Add Enzyme to your application
  `$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

```javascript
// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home.js'
```

- Configure Enzyme
  `Enzyme.configure({ adapter: new Adapter() })`

- Add a test file for the Home, Header, Footer, and NotFound components with the .test.js extension.

- Create a test for each page, checking that the page is rendering by asserting against a single JSX element.

```javascript
describe("When Home Renders", () => {
  it("displays a heading", () => {
    const renderedHome = shallow(<Home />)
    const homeHeading = renderedHome.find("h3")
    expect(homeHeading.text()).toEqual('Welcome to Cat Tinder!')
  })
})
```

- As a developer, I can make my tests more DRY by declaring reusable variables in global scope.
- Create an additional test for the component Home.js that checks for the first img tag and all of its props.
- Create an additional test for the component Header.js that checks for a tag by its class name to contain some text.


### Cat Tinder Read 4/6/2022

RESTful Routes
Data
- index - all the stuff
- show - one thing, which thing is going to show, id
- create
- destroy
- update
User
- edit
- new

Static vs dynamic routes

### Cat Tinder Create 4/6/2022

#### The work flow --- Create a test that will verify that the CatNew page has a form and a heading.

Trello---As a developer, I have test coverage on my new page.
- Bring in test dependencies from jest enzyme
- write test 
``` javascript
describe("When CatNew Renders", () => {
  it("displays a heading", () => {
    const renderedCatNew = shallow(<CatNew />)
    const catNewHeading = renderedCatNew.find("h2")
    expect(catNewHeading.text()).toEqual('Welcome to the Meow Mixer')
  })
  it("displays a form", () => {
    const renderedCatNew = shallow(<CatNew />)
    const catNewForm = renderedCatNew.find("Form")
    expect(catNewForm.length).toEqual(1)
  })
})
```
- $ yarn test
- Good failure if all tests appear.

#### The work flow --- Add a form and a heading on the CatNew page.
Trello---As a user, I can fill out a form to add a new cat.
- copy code for form and button from reactstrap.github.io
```javascript
<Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
    <Button>
    Submit
  </Button>
</Form>
```
- import all the tags from Reactstrap
```javascript
  import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
```

- Update the form to reflect the input fields for cat's name, age, enjoys, image
- Add the h2 heading as shown on the test
- Remove id attribute
```javascript
  <Form>
    <h2>Welcome to the Meow Mixer</h2>
    <FormGroup>
      <Label for="name">
        Cat's Name
      </Label>
      <Input
        name="name"
        placeholder="What's your cat's name?"
        type="text"
      />
    </FormGroup>
      <Button>
        Submit
      </Button>
  </Form>
```

- Verify the tests passed
- Ctrl + C to stop the tests from auto-running
- A form with the 4 input fields should appear on the CatNew page in the browser

#### The work flow --- Transform CatNew page into a logic component.
Trello---As a developer, I can store the cat object in state
- Constructor method with a state object under the class component. We will also include a nested object that will store the input data for our cats
```javascript
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }
    }
  }
```
- Collect info with a custom function and event listener. The function will initially just print out the event object produced by the event listener
```javascript
handleChange = (e) => { 
  console.log(e)
}
```
Each input will receive an event listener.
```javascript
  <Input
    name="age"
    placeholder="How long has your cat been purring?"
    type="number"
    onChange={this.handleChange}
  />
```

- update the handleChange() to reflect the e.target.name and e.target.value

- update handleChange() to change the appropriate keys in state with destructuring the form object from state, dynamically sharing the key:value pairs, 
  ```javascript
  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  ```

- Add a value attribute to the input field to ensure what the user types is showig visually on the form
```javascript
  <Input
    name="age"
    placeholder="How long has your cat been purring?"
    type="number"
    onChange={this.handleChange}
    value={this.state.form.age}
  />
```

#### The work flow --- Pass info to App.js
Trello---As a developer, I can pass the cat object to App.js on submit and see the cat object logged in the console.
- Create a function on App.js that takes in an argument and prints that out.
```javascript
  createCat = (newCat) => {
    console.log("Cat has been created", newCat)
  }
```
- Make function available to child component
```javascript
  <Route
    path="/catnew"
    render={(props) => <CatNew createCat={this.createCat} />}
  />
```
- Access the createCat() in CatNew.js by creating a function that calls upon createCat() and passes the nested object form 
```javascript 
handleSubmit = () => {
  this.props.createCat(this.state.form)
}
```
- Update the submit button to trigger the handleSubmit()
```javascript
  <Button onClick={this.handleSubmit} name='submit'>
    Add a Cat
  </Button> 
```

#### The work flow --- Redirect to the CatIndex page after submitting cat info
Trello---As a user, I can be routed to the index page after I submit the new cat form.
- import Redirect from react-router-dom
- Set the condition to be met that will allow a redirect. Initial state ---> submitted: false 
- Use handleSubmit() to update submitted to true when a submission is made

