import TextField from "@mui/material/TextField";
import MemoList from "../components/MemoList";
import React from "react";
import Box from "@mui/material/Box";
import { useSearchParams } from "react-router";

function Search() {
  // 使用useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchItem, setSearchItem] = React.useState(
    searchParams.get("q") || ""
  );

  const onChange = (e) => {
    const query = String(e.target.value);
    setSearchItem(query);
    setSearchParams({ q: query });
  };

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
          onChange={onChange}
        />
        <MemoList searchItem={searchItem}></MemoList>
      </Box>
    </>
  );
}

export default Search;
