import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"
import MuiInput from "@mui/material/Input"

const Input = styled(MuiInput)`
  width: 42px;
`

export default function InputSlider() {
  const [value, setValue] = React.useState(3000)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value))
  }

  const handleBlur = () => {
    if (value < 0) {
      setValue(0)
    } else if (value > 100) {
      setValue(100)
    }
  }

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {value}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item></Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={250}
            marks
            min={3000}
            max={9000}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Input
        value={value}
        size="large"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 250,
          min: 3000,
          max: 9000,
          type: "number",
          "aria-labelledby": "input-slider",
        }}
      />
    </Box>
  )
}
