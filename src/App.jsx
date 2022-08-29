import { useState } from "react";
import axios from "axios";

import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(null);
  const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/todos";

  axios.get(jsonPlaceholderURL).then((result) => {
    setTodos(result.data);
  });

  return <div>{todos ? <TodoList todos={todos} /> : <Loading />}</div>;
}

export default App;
