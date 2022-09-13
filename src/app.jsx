import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "./components";
import Register from "./pages/register/register";
import decode from "jwt-decode";
import Movies from "./pages/my-profile/my-profile";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

class App extends Component {
  constructor(props) {
    super(props);
    const jwt = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) || null;
    this.state = {
      user: jwt && decode(jwt),
    };
  }

  handleLogin = () => {
    const jwt = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    const user = decode(jwt);
    this.setState({ user });
  };

  handleLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);

    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;
    return (
      <div className="app">
        <NavBar user={user} onLogout={this.handleLogout} />
        <div className="pt-4 wrapper">
          <Switch>
            <Route
              exact
              path="/"
              component={(props) =>
                user ? <Movies {...props} /> : <Redirect to="/register" />
              }
            />

            <Route
              exact
              path="/login"
              component={(props) =>
                user ? (
                  <Redirect to="/" />
                ) : (
                  <Login {...props} onLogin={this.handleLogin} />
                )
              }
            />
            <Route
              exact
              path="/login"
              component={(props) =>
                user ? (
                  <Redirect to="/" />
                ) : (
                  <Login {...props} onLogin={this.handleLogin} />
                )
              }
            />

            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
