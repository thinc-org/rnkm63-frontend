import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Header, Footer } from "./components/shared";

import { Profile, Form } from "./components/pages";

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <Header />
        <div className="PageContainer">
          <Switch>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
