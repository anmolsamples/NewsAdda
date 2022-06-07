
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Newscomponent from './components/Newscomponent';


export default class App extends Component {
  c='due to this exporting rule in react'
  render() {
    
    return (
      <div>
        <NavBar/>
        <Newscomponent pageSize={9} />
      </div>
    )
  }
}






