import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import InfoPanel from "./components/info-panel/InfoPanel";
import DetailTabPanel from "./components/detail-tabpanel/DetailTabPanel";

class App extends Router {
  render() {
    return (
      <div className="App">
        <Router>
          <InfoPanel></InfoPanel>
          <DetailTabPanel></DetailTabPanel>
        </Router>
      </div>
    );
  }
}

export default App;
//test
