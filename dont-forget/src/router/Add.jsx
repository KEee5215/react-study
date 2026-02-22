import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useLocalStorage } from "@reactuses/core";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function Add() {
  const [_memoList, setMemoList] = useLocalStorage("memoList", []);
  const [_checkedList, setCheckedList] = useLocalStorage("checkedList", []);

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const navigate = useNavigate();

  function handleAdd() {
    // console.log(title, content);
    setMemoList((memoList) => [
      ...memoList,
      { id: Date.now(), title, content, checked: false },
    ]);

    setCheckedList((checkedList) => [
      ...checkedList,
      { id: Date.now(), checked: false },
    ]);

    setTitle("");
    setContent("");

    // 返回主页
    toast.success("Memo added!");
    navigate("/");
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "56px 16px",
        }}
      >
        <TextField
          sx={{ marginBottom: "16px" }}
          fullWidth
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          style={{ marginTop: "16px" }}
          variant="contained"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Box>
    </>
  );
}

export default Add;
