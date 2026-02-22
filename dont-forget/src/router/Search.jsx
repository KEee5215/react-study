import TextField from "@mui/material/TextField";
import MemoList from "../components/MemoList";
import React from "react";
import Box from "@mui/material/Box";

function Search() {
  const [searchItem, setSearchItem] = React.useState("");

  return (
    <>
      <Box sx={{ width: "100%", padding: "56px 0" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <MemoList searchItem={searchItem}></MemoList>
      </Box>
    </>
  );
}

export default Search;
