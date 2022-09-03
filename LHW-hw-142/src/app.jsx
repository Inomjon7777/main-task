import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Movies, Register } from "./pages";
import { NavBar } from "./components";
import { object, string, number } from "yup";

// const schema = object({
//   username: string().min(5).required(),
//   age: number().min(100).typeError("Please enter number type"),
// });

class App extends Component {
  // componentDidMount() {
  //   const errors = {};
  //   const data = { username: "arslonbek" };
  //   schema
  //     .validate(data, { abortEarly: false })
  //     .then((values) => {
  //       console.log("values = ", values);
  //     })
  //     .catch(({ inner }) => {
  //       for (let { path, message } of inner) errors[path] = message;
  //       console.log("errors = ", errors);
  //     });
  // }
  render() {
    return (
      <>
        <NavBar />
        <div className='container pt-4 wrapper'>
          <Switch>
            <Route path='/movies' component={Movies} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
