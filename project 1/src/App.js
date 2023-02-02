import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import CustomButton from "./components/Button";

function App() {
  return (
    <Box>
      <Typography variant="body1">
        Hello
      </Typography>
      <CustomButton>Custom Button</CustomButton>
    </Box>
  );
}

export default App;
