import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
        image:""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.props.createCat(this.state.form)
    this.setState({submitted: true})
  }

  render() {
    console.log(this.state.form)
    return (
      <Form>
        <h2>Welcome to Meow Mixer</h2>
        <FormGroup>
          <Label for="name">
            Cat's Name
          </Label>
          <Input
            name="name"
            placeholder="What's your cat's name?"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Cat's Age
          </Label>
          <Input
            name="age"
            placeholder="How long has yout cat been purring?"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Cat's Hobbies
          </Label>
          <Input
            name="enjoys"
            placeholder="What gives your cat enjoyment?"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
            Cat's Profile Picture
          </Label>
          <Input
            name="image"
            placeholder="Let's see that face"
            type="url"
            onChange={this.handleChange}
            value={this.state.form.image}
          />
        </FormGroup>

        <Button onClick={this.handleSubmit} name="submit">
          Add a Cat
        </Button>
        {this.state.submitted && < Redirect to="/catindex" />}
      </Form>    
    )
  }
}
export default CatNew