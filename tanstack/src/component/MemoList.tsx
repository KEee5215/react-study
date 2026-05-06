import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

import MemoListItem from "./MemoListItem";

export default function MemoList() {
  //mockMemoList
  const mockMemoList = [
    {
      id: 1,
      title: "去吃饭1",
      description: "吃好吃的火锅1",
    },
    {
      id: 2,
      title: "去吃饭2",
      description: "吃好吃的火锅2",
    },
    {
      id: 3,
      title: "去吃饭3",
      description: "吃好吃的火锅3",
    },
    {
      id: 4,
      title: "去吃饭4",
      description: "吃好吃的火锅4",
    },
    {
      id: 5,
      title: "去吃饭5",
      description: "吃好吃的火锅5",
    },
    {
      id: 6,
      title: "去吃饭6",
      description: "吃好吃的火锅6",
    },
    {
      id: 7,
      title: "去吃饭4",
      description: "吃好吃的火锅4",
    },
    {
      id: 8,
      title: "去吃饭5",
      description: "吃好吃的火锅5",
    },
    {
      id: 9,
      title: "去吃饭6",
      description: "吃好吃的火锅6",
    },
    {
      id: 10,
      title: "去吃饭4",
      description: "吃好吃的火锅4",
    },
    {
      id: 11,
      title: "去吃饭5",
      description: "吃好吃的火锅5",
    },
    {
      id: 12,
      title: "去吃饭6",
      description: "吃好吃的火锅6",
    },
  ];
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {mockMemoList.map((item) => (
        <MemoListItem key={item.id} item={item} />
      ))}
    </List>
  );
}
