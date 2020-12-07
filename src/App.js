import React from 'react'
import AddPhoto from './componenets/AddPhoto/AddPhoto'
import MaterialNavbar from './componenets/Navbar/MaterialNavbar'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import './App.css'


function App() {
  return (
      <Router>
      <MaterialNavbar/>
        <Switch>
          <Route path="/addphoto" exact component={AddPhoto}/>
        </Switch>
      </Router>
  )
}

export default App
