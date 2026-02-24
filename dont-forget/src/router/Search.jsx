import TextField from "@mui/material/TextField";
import MemoList from "../components/MemoList";
import React from "react";
import Box from "@mui/material/Box";

function Search() {
  const [searchItem, setSearchItem] = React.useState("");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          autoComplete="off"
          fullWidth
          id="outlined-basic"
          label="search"
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
