import React, { Component } from "react";
import InfoPanel from "./components/info-panel/InfoPanel";
import DetailTabPanel from "./components/detail-tabpanel/DetailTabPanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoPanel></InfoPanel>
        <DetailTabPanel></DetailTabPanel>
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/Home";
// // import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import TechnicalSkills from "./components/TechnicalSkills";
// import Resume from "./components/Resume";
// import Contact from "./components/Contact";
// // import About from "./components/About";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       navroute: "",
//       totalroutes: [
//         "About",
//         "TechnicalSkills",
//         "Portfolio",
//         "Contact",
//         "Resume",
//       ],
//     };
//   }
//   render() {
//     return (
//       <Router>
//         <div>
//           <NavTabs navroute={this.state.navroute} />
//           {/* <Bootstrap /> */}
//           <Switch>
//             <Route exact path="/" component={Home} />
//             {/* <Route exact path="/about" component={About} /> */}
//             <Route exact path="/portfolio" component={Portfolio} />
//             <Route exact path="/technicalskills" component={TechnicalSkills} />
//             <Route exact path="/contact" component={Contact} />
//             <Route exact path="/resume" component={Resume} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }
// export default App;
