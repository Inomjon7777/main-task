import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Owner } from "./pages/owner";
import { Details } from "./pages/details";
import { bankAnAccount } from "./pages/bank-an-account";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container pt-4 wrapper">
          <Switch>
            <Route path="/owner" component={Owner} />
            <Route path="/details" component={Details} />
            <Route path="/bank-an-account" component={bankAnAccount} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
