import React from "react";
import axios from "axios";

import "./get.scss";

const baseURL = "http://10.10.1.243:8080/api/todos";

class Get extends React.Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios.get(baseURL).then(({ data }) => {
      this.setState({ todos: data });
      console.log(data);
    });
  }
  render() {
    return (
      <>
        <h1>GET REQUEST</h1>
        <div className="get">
          <ul>
            <li>
              <b>id</b>
            </li>
            {this.state.todos.map(({ _id }) => (
              <li>{_id}</li>
            ))}
          </ul>
          <ul>
            <li>
              <b>title</b>
            </li>
            {this.state.todos.map(({ title }) => (
              <li>{title}</li>
            ))}
          </ul>
          <ul>
            <li>
              <b>description</b>
            </li>
            {this.state.todos.map(({ description }) => (
              <li>{description}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Get;
