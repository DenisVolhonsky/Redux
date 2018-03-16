import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="Container"> 
        <h1>Hello Redux!</h1>  
        <Counter/>
      </div>
    )
  }
}

