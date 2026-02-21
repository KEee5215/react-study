import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";
export default function CheckboxList() {
  const arr = [
    {
      id: 1,
      title: "任务1",
      todo: "吃饭asaSFSAfsf,   sdfesgs  ,ereggiowefoodhf",
    },
    { id: 2, title: "任务2", todo: "睡觉dsfagagagawegweg" },
    { id: 3, title: "任务3", todo: "打豆豆wasgawegagasdgsadgasd" },
    { id: 4, title: "任务4", todo: "看电影" },
    { id: 5, title: "任务1", todo: "吃饭" },
    { id: 6, title: "任务2", todo: "睡觉" },
    { id: 7, title: "任务3", todo: "打豆豆" },
    { id: 8, title: "任务4", todo: "看电影" },
    { id: 9, title: "任务1", todo: "吃饭" },
    { id: 12, title: "任务2", todo: "睡觉" },
    { id: 14, title: "任务3", todo: "打豆豆" },
    { id: 412, title: "任务4", todo: "看电影" },
    { id: 4122, title: "任务1", todo: "吃饭" },
    { id: 41223, title: "任务2", todo: "睡觉" },
    { id: 4124, title: "任务3", todo: "打豆豆" },
  ];

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "background.paper",
        padding: "56px 0px",
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
