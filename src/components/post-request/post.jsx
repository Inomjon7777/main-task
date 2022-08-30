import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  createPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "lorem ipsum post title",
        body: "lorem ipsum post body content",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return <div>Post</div>;
  }
}

export default Post;
