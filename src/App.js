import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import About from './Pages/About';
import Details from './Pages/Details';
import Category from './Pages/Category';
import CategoryList from './Pages/CategoryList';



export default class App extends Component {
  

  render() {
    return (
     <Router>
       <Switch>
     
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={Details} />
          <Route path="/category" exact component={Category} />
          <Route path="/categorylist/:category" component={CategoryList} />
          
          

         
       </Switch>
     </Router>
    )
  }
}