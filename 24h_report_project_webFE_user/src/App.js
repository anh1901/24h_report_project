import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import News from "./components/pages/News";
import SendReport from "./components/pages/SendReport";
import InstallApp from "./components/pages/InstallApp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/sendReport" component={SendReport} />
          <Route path="/installApp" component={InstallApp} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
