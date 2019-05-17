import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BeerList from './components/BeerList';
import Beer from './components/Beer';
import CreateBeer from './components/CreateBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/beers' component={BeerList}></Route>
            <Route exact path='/beers/:id' component={Beer}></Route>
            <Route exact path='/random-beer' component={Beer}></Route>
            <Route exact path='/new-beer' component={CreateBeer}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
