import { useState } from "react";
// 引入 React-Redux 的 hooks
import { useSelector, useDispatch } from "react-redux";
// 引入 RTK 自动生成的 action creator
import { addTodo, toggleTodo, setFilter } from "./features/todos/todoSlice";

function App() {
  // 1. 获取 dispatch 函数（用于触发 action）
  const dispatch = useDispatch();

  // 2. 用 useSelector 读取全局状态（替代原生的 store.getState()）
  const { list, filter } = useSelector((state) => state.todos);

  // 3. 本地状态：输入框内容
  const [inputText, setInputText] = useState("");

  // 4. 筛选待办列表（根据当前筛选条件）
  const filteredTodos = () => {
    switch (filter) {
      case "SHOW_COMPLETED":
        return list.filter((todo) => todo.completed);
      case "SHOW_ACTIVE":
        return list.filter((todo) => !todo.completed);
      default:
        return list;
    }
  };

  // 5. 事件处理：添加待办
  const handleAddTodo = () => {
    if (!inputText.trim()) return;
    // 触发 addTodo action，payload 是输入的内容
    dispatch(addTodo(inputText));
    setInputText(""); // 清空输入框
  };

  // 6. 事件处理：切换待办状态
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  // 7. 事件处理：切换筛选条件
  const handleSetFilter = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>RTK 待办清单</h1>

      {/* 输入框 + 添加按钮 */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="输入待办内容..."
          style={{ padding: "8px", width: "300px" }}
        />
        <button
          onClick={handleAddTodo}
          style={{ padding: "8px 16px", marginLeft: "10px" }}
        >
          添加
        </button>
      </div>

      {/* 筛选按钮 */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => handleSetFilter("SHOW_ALL")}
          style={{ marginRight: "10px" }}
        >
          全部
        </button>
        <button
          onClick={() => handleSetFilter("SHOW_ACTIVE")}
          style={{ marginRight: "10px" }}
        >
          未完成
        </button>
        <button onClick={() => handleSetFilter("SHOW_COMPLETED")}>
          已完成
        </button>
      </div>

      {/* 待办列表 */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos().map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              marginBottom: "8px",
              backgroundColor: "#f5f5f5",
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
