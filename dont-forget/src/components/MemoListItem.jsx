import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import * as React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function MemoListItem({ value, labelId }) {
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <ListItem
        //delete button
        secondaryAction={
          <IconButton edge="end" aria-label="deleteButton">
            <HighlightOffIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
          {/* checkbox */}
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.includes(value)}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
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
