import React from "react";
import {
  Navbar,
  HomePage,
  SpecialDish,
  Categories,
  RandomDish,
  Footer,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/special" component={SpecialDish} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/random" component={RandomDish} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
