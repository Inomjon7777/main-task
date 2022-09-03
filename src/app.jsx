import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import { About, Contact, Home } from "./pages";
class App extends Component {
  state = {
    routes: [
      { title: "Home", path: "/home" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
    pathname: window.location.pathname,
  };

  render() {
    const { routes, pathname } = this.state;
    return (
      <>
        <NavBar pathname={pathname} routes={routes} />
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Home path="/" component={Home} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
