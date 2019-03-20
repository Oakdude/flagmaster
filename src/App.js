import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import GuessTheFlag from './components/games/GuessTheFlag';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/guesstheflag" 
            render={()=> <GuessTheFlag />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
