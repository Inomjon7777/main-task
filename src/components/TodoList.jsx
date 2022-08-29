const TodoList = ({ todos }) => {
  return (
    <>
      <h1 className="text-center mb-2">Todo List With Get Request</h1>

      <ul className="list-group">
        {todos.map((todo) => (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <input type="checkbox" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
