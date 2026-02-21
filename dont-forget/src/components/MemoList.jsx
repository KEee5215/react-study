import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";
export default function CheckboxList() {
  const arr = [
    { id: 1, title: "任务1", todo: "吃饭" },
    { id: 2, title: "任务2", todo: "睡觉" },
    { id: 3, title: "任务3", todo: "打豆豆" },
  ];

  return (
    <List
      sx={{
        height: "100px",
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
      }}
    >
      {arr.map((value) => {
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
