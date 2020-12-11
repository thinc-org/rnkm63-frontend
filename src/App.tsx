import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Header, Footer } from "./components/shell";
import { Profile, Form, Login, NotFound } from "./components/pages";

import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="AppContainer">
          <Header />
          <div className="PageContainer">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/" exact>
                <Profile />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
