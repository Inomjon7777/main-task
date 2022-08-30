import React from "react";
import Get from "./components/get-request/get";
import { Post } from "./components/post-request/post";
import { Put } from "./components/put-request/put";
import Delete from "./components/delete-request/delete";

import "./assets/styles/index.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Get />
        <Post />
        <Put />
        <Delete />
      </div>
    );
  }
}
export default App;
