import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import './App.css';
import SignIn from './components/account/SignIn';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
function PageNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }} >
      <h1>Page not found</h1>
      <Link to="/"> <button style={{ cursor: "pointer", padding: ".2rem 1rem", backgroundColor: "#009f4d", color: "#fff", border: "none", borderRadius: "4px" }}>Back to Home page</button></Link>
    </div>
  )
}

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
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
