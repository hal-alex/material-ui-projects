import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: "#686868",
        },
        slateBlue: {
            main: "#777FEB",
        },
    },
    typography: {
        h2: {
            fontFamily: "Montserrat, sans-serif"
        }
    }
})

export default theme