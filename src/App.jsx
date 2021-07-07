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
          <Route path="/" component={HomePage} />
          <Route path="/special" component={SpecialDish} />
          <Route path="/categories" component={Categories} />
          <Route path="/random" component={RandomDish} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
