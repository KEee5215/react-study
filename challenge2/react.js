function App() {
  const [inputText, setInputText] = React.useState("");
  //todo array
  const [todos, setTodos] = React.useState([]);

  //completed todo array
  const [completedTodos, setCompletedTodos] = React.useState([]);

  const renderTodo = todos.map((item) => (
    <li key={item.id} style={{ display: item.isCompleted ? "none" : "block" }}>
      <input
        type="checkbox"
        onClick={(e) => handleComplete(e, item.id)}
      ></input>
      <span>{item.text}</span>
      <button onClick={() => handleTodoDelete(item.id)}>delete</button>
    </li>
  ));

  const renderCompletedTodo = completedTodos.map((item) => (
    <li key={item.id} style={{ display: item.isCompleted ? "none" : "block" }}>
      <input
        checked
        readOnly
        type="checkbox"
        onClick={() => handleTodo(item.id)}
      ></input>
      <span style={{ textDecoration: "line-through" }}>{item.text}</span>
      <button onClick={() => handleCompleteDelete(item.id)}>delete</button>
    </li>
  ));

  //找到todos中的最大id
  function getMaxId() {
    let maxId = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id > maxId) {
        maxId = todos[i].id;
      }
    }
    return maxId;
  }

  function handleAdd() {
    let arrMaxLength = getMaxId();
    console.log("add", inputText);
    if (inputText) {
      setTodos([
        ...todos,
        { id: arrMaxLength + 1, text: inputText, isCompleted: false },
      ]);
      console.log(todos);
      setInputText("");
    }
  }

  function handleTodoDelete(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function handleCompleteDelete(id) {
    setCompletedTodos(completedTodos.filter((item) => item.id !== id));
  }

  function handleComplete(e, id) {
    e.preventDefault();

    const completed = todos.find((item) => item.id === id);
    setCompletedTodos([...completedTodos, completed]);

    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: true } : item
    );
    setTodos(newTodos);

    console.log("未完成", todos);
    console.log("已完成", completedTodos);
    // setTodos(todos.filter((item) => item.id !== id));
    // console.log(completedTodos);
  }

  function handleTodo(id) {
    console.log("todo", id);
    // const completed = completedTodos.map((item) =>
    //   item.id === id ? { ...item, isCompleted: true } : item
    // );
    const completed = completedTodos.filter((item) => item.id !== id);
    setCompletedTodos(completed);

    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: false } : item
    );
    setTodos(newTodos);

    console.log("未完成", todos);
    console.log("已完成", completedTodos);
    // setCompletedTodos(completedTodos.filter((item) => item.id !== id));
    // console.log(todos);
  }

  return (
    <>
      <main>
        <h1>React Todo List</h1>

        <input
          type="text"
          placeholder="add todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <button onClick={handleAdd}>add</button>

        <ul>{renderTodo}</ul>
        <ul>{renderCompletedTodo}</ul>
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
