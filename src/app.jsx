import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/header";
import CreateAccaunt from "./pages/create-accaunt/create-accaunt";
import ForgotPassword from "./pages/forgot-password/forgot-password";

function App() {
  return (
    <>
      <div className="App">
      </div>

      <Switch>
        <Route path="/header" component={Header}></Route>
        <Route path="/sign-up" component={CreateAccaunt}></Route>
        <Route path="/reset-password" component={ForgotPassword}></Route>
      </Switch>
    </>
  );
}

export default App;
