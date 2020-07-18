import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/header/Header";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import About from "./components/footer/About";
import Terms from "./components/footer/Terms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
