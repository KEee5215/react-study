import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import * as React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";

function MemoListItem({ value, labelId, deleteMemo }) {
  const [checked, setChecked] = React.useState([]);

  const navigate = useNavigate();
  const handleToggle = (id) => () => {
    navigate("/memo/" + id);
  };

  return (
    <>
      <ListItem
        //delete button
        secondaryAction={
          <>
            {/* 编辑按钮 */}
            {/* <IconButton
              sx={{ marginRight: "12px" }}
              edge="end"
              aria-label="editButton"
              
            >
              <EditIcon />
            </IconButton> */}
            {/* 删除按钮 */}
            <IconButton
              edge="end"
              aria-label="deleteButton"
              onClick={() => deleteMemo(value.id)}
            >
              <HighlightOffIcon />
            </IconButton>
          </>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
          {/* <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.includes(value)}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon> */}
          {/* text */}
          <ListItemText
            id={labelId}
            primary={value.title}
            secondary={value.content}
            primaryTypographyProps={{
              sx: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "180px", // 可根据实际调整宽度
                display: "block",
              },
            }}
            secondaryTypographyProps={{
              sx: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "180px",
                display: "block",
              },
            }}
          />
        </ListItemButton>
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default MemoListItem;
