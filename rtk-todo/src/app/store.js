// 引入 RTK 的核心配置函数
import { configureStore } from "@reduxjs/toolkit";
// 引入待办模块的 slice
import todoReducer from "../features/todos/todoSlice";

// 配置 store：只需要传入 reducer 即可
export const store = configureStore({
  reducer: {
    // 把 todoSlice 的 reducer 挂载到全局状态的 todos 节点下
    todos: todoReducer,
  },
});
