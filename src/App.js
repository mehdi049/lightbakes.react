import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/basket" exact component={Basket} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
