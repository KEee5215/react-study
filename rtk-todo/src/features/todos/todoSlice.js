import { createSlice } from "@reduxjs/toolkit";

// 初始状态（对应原生 Redux 的初始 state）
const initialState = {
  // 待办列表
  list: [],
  // 筛选条件
  filter: "SHOW_ALL", // SHOW_ALL / SHOW_COMPLETED / SHOW_ACTIVE
};

// 创建 slice：整合状态、修改规则、action
export const todoSlice = createSlice({
  // slice 名称（会作为 action type 的前缀）
  name: "todos",
  // 初始状态
  initialState,
  // 核心：reducer 函数（RTK 内部用 Immer 库，允许“直接修改”状态，实际是生成新状态）
  reducers: {
    // 1. 添加待办的 reducer
    addTodo: (state, action) => {
      // RTK 允许直接 push（Immer 自动处理成不可变操作）
      state.list.push({
        id: Date.now(), // 用时间戳做唯一 ID
        text: action.payload, // payload 是传入的待办内容
        completed: false,
      });
    },

    // 2. 切换待办完成状态的 reducer
    toggleTodo: (state, action) => {
      // action.payload 是待办的 id
      const todo = state.list.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // 直接修改，Immer 自动处理
      }
    },

    // 3. 设置筛选条件的 reducer
    setFilter: (state, action) => {
      state.filter = action.payload; // 直接修改筛选条件
    },
  },
});

// RTK 自动生成 action creator 函数（不用手动写！）
export const { addTodo, toggleTodo, setFilter } = todoSlice.actions;

// 导出 reducer，供 store 使用
export default todoSlice.reducer;
