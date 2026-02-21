import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // 根据按钮索引切换路由
    if (newValue === 0) navigate("/");
    if (newValue === 1) navigate("/add");
    if (newValue === 2) navigate("/search");
  };

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Add" icon={<AddIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
