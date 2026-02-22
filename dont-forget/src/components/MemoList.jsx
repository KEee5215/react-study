import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";
import { useLocalStorage } from "@reactuses/core";
import React, { use, useEffect } from "react";
export default function CheckboxList({ searchItem = "" }) {
  const [memoList, _setMemoList] = useLocalStorage("memoList", []);

  const [filteredMemoList, setFilteredMemoList] = React.useState(memoList);

  useEffect(() => {
    if (searchItem === "") {
      setFilteredMemoList(memoList);
      return;
    }
    setFilteredMemoList(
      memoList.filter((memo) =>
        memo.title
          .trim()
          .toLowerCase()
          .includes(searchItem.trim().toLowerCase())
      )
    );
  }, [searchItem, memoList]);

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          padding: "56px 0px",
        }}
      >
        {filteredMemoList.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;
          return (
            <MemoListItem
              key={value.id}
              value={value}
              labelId={labelId}
            ></MemoListItem>
          );
        })}
      </List>
    </>
  );
}
