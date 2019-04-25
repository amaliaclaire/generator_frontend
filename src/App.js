import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Form from './components/Form'
import View from './components/View'

const baseURL = 'http://localhost:3000/responses'

class App extends Component {
  state = { isShown: true }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {this.state.isShown ? (<View />) : (<Form />)}
      </div>
    )
  }
}

export default App
