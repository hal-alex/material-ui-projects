import { createTheme } from '@mui/material/styles'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'

const breakPoints = createBreakpoints({})

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
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "39px",
            color: "black",
            [breakPoints.up("md")]: {
                fontSize: "64px",
                lineHeight: "78px",
            },

        },
        body1: {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "17px",
            color: "black",
            [breakPoints.up("md")]: {
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "29px",
            },

        }
    }
})

export default theme