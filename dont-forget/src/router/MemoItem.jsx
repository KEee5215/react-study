import { useLocalStorage } from "@reactuses/core";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function MemoItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [memoList, setMemoList] = useLocalStorage("memoList", []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 查找对应的 memo
  useEffect(() => {
    if (memoList && memoList.length > 0) {
      const foundMemo = memoList.find((item) => item.id === parseInt(id));
      if (foundMemo) {
        setTitle(foundMemo.title || "");
        setContent(foundMemo.content || "");
      } else {
        // 如果没找到对应的 memo，可以重定向到首页或其他处理
        console.warn(`Memo with id ${id} not found`);
        navigate("/");
      }
    }
  }, [memoList, id, navigate]);

  function handleEdit() {
    // 找到对应 memo 的索引
    const idx = memoList.findIndex((item) => item.id === parseInt(id));
    if (idx === -1) {
      alert("找不到要编辑的备忘录");
      return;
    }

    // 创建新的 memoList
    const newMemoList = [...memoList];
    // 这样就创建了一个新对象，只更新了 title 和 content 字段，其他字段保持不变
    newMemoList[idx] = { ...newMemoList[idx], title, content };
    setMemoList(newMemoList);

    // 提示并返回主页
    alert("编辑成功！");
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
          padding: "20px",
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
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Box>
    </>
  );
}

export default MemoItem;
