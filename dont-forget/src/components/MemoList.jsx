import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";
import { useLocalStorage } from "@reactuses/core";
export default function CheckboxList() {
  const [memoList, _setMemoList] = useLocalStorage("memoList", []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        padding: "56px 0px",
      }}
    >
      {memoList.map((value) => {
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
  );
}
