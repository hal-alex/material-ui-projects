import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== ("success" || "bgColor")
})(({ bgColor, txtColor }) => ({
    color: txtColor ? txtColor : "white",
    backgroundColor: bgColor ? bgColor : "black",
}))

export default CustomButton