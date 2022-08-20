import React, { Component } from 'react'
import Nav from './components/Nav';
import TechNews from './pages/Tech-News';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NEWSFROMUSA from './pages/News-From-USA';
import BBC from './pages/BBC';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path ="/" element ={<TechNews />}/>
        <Route path ="/About" element ={<NEWSFROMUSA />}/>
        <Route path ="/Contact" element ={<BBC />}/>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;