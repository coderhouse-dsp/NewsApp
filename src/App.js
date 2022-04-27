import './App.css'

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
// import NewsItem from './Components/NewsItem'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 15;
  state = {
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> */}
          <Routes>
            <Route
              exact
              path='/'
              element={
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key='general'
                  country='in'
                  category='general'
                />
              }
            ></Route>
            <Route
              exact
              path='/business'
              element={
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key='business'
                  country='in'
                  category='business'
                />
              }
            ></Route>
            <Route
              exact
              path='/entertainment'
              element={
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key='entertainment'
                  country='in'
                  category='entertainment'
                />
              }
            ></Route>
            <Route
              exact
              path='/health'
              element={
                <News setProgress={this.setProgress}
                  key='health'
                  pageSize={this.pageSize}
                  country='in'
                  category='health'
                />
              }
            ></Route>
            technology
            <Route
              exact
              path='/science'
              element={
                <News setProgress={this.setProgress}
                  key='science'
                  pageSize={this.pageSize}
                  country='in'
                  category='science'
                />
              }
            ></Route>
            <Route
              exact
              path='/sports'
              element={
                <News setProgress={this.setProgress}
                  key='sports'
                  pageSize={this.pageSize}
                  country='in'
                  category='sports'
                />
              }
            ></Route>
            <Route
              exact
              path='/technology'
              element={
                <News setProgress={this.setProgress}
                  pageSize={this.pageSize}
                  key='technology'
                  country='in'
                  category='technology'
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
