import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
//Prop tunelling: when a prop is only available to the top parent class, and we drill it layers under
//the children tree, its called prop tunelling and is often a bad practice.
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
