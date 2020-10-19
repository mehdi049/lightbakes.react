import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Article from "./components/Article";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article" exact component={Article} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
