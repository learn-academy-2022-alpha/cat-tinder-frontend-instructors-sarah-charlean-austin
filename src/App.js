import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.readCat()
  }

// CRUD actions for cats
  createCat = (newCat) => {
    //fetch(argument1, argument2)
    fetch("http://localhost:3000/cats", {
      // converting an object to a string
      body: JSON.stringify(newCat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => this.readCat())
  }

  readCat = () => {
    // fetch should hit cats#index on the rails backend
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(payload => this.setState({ cats: payload }))
    .catch(errors => console.log("Cat Read Errors", errors))
  }

  updateCat = (updatedCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      // converting an object to a string
      body: JSON.stringify(updatedCat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => this.readCat())
  }

  deleteCat = (id) => {
    console.log(`Cat at ${id} was deleted`, id)
  }

  render() {
    console.log(this.state)
    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} /> }
          />

          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(catObj => catObj.id === +id)
              return <CatShow cat={cat} />
            }}
          />

          <Route path="/catedit" component={CatEdit} />

          <Route 
            path="/catnew"
            render={(props) => < CatNew createCat={this.createCat} />}  
          />

          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}


export default App;
