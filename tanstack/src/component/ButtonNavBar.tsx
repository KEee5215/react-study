import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "@tanstack/react-router";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate({ to: "/" })}
          label="HOME"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate({ to: "/add" })}
          label="ADD"
          icon={<AddIcon />}
        />
        <BottomNavigationAction
          onClick={() => navigate({ to: "/search" })}
          label="SEARCH"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
