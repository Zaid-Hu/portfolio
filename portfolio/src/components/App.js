import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Menu from "./Menu";
import ReactProjects from "./reactProjs/ReactProjects";
import JsProjects from "./jsProjs/JsProjects";
import history from "../history";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#e2e2e2",
        margin: "5rem 0",
        padding: "2rem 0 8rem 0"
      }}
    >
      <div className="ui container">
        <div>
          <h1
            className="ui hearder"
            style={{ textAlign: "center", margin: "2rem auto" }}
          >
            Portfolio
          </h1>
        </div>
        <div>
          <Router history={history}>
            <div className="ui grid">
              <Menu className="four wide column" />
              <div className="twelve wide column">
                <Switch>
                  <Route path="/" exact component={ReactProjects} />
                  <Route path="/js" exact component={JsProjects} />
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
