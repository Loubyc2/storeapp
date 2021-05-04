import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import SignIn from './components/account/SignIn';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
