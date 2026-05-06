import * as React from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";

interface MemoItem {
  id: number | string;
  title: string;
  description: string;
}

interface MemoListItemProps {
  item: MemoItem;
}

export default function MemoListItem({ item }: MemoListItemProps) {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={item.title}
          secondary={<Typography>{item.description}</Typography>}
        />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
}
