import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Bootstrap from "./components/Bootstrap";
import NavTabs from "./components/NavTabs";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import TechnicalSkills from "./components/TechnicalSkills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* <Bootstrap /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/technicalskills" component={TechnicalSkills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
