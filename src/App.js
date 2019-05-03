import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Form from './components/Form'
import View from './components/View'

const baseURL = 'http://localhost:3000/responses'

class App extends Component {
  state = { isShown: false }

  componentDidMount() {

  }

  toggleView = () => {
    this.state.isShown ? this.setState({ isShown: false }) : this.setState({ isShown: true })
  }

  render() {
    return (
      <div className="container">
        {this.state.isShown ? (<View toggleView={this.toggleView} />) : (<Form toggleView={this.toggleView} />)}
      </div>
    )
  }
}

export default App
