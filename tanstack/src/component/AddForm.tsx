import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="标题" variant="outlined" />
      <TextField
        id="outlined-multiline-static"
        label="内容"
        multiline
        rows={4}
        // defaultValue=""
      />
    </Box>
  );
}
