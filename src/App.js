import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article" exact component={Article} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
