import MUIButton from "@mui/material/Button"

const styles = {
    btn: (theme) => (
        {
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "20px",
            textTransform: "capitalize",
            color: "black",
            padding: "20px 60px",
            background: theme.palette.slateBlue.main,
            borderRadius: "8px",
            "&:hover": {
                background: "#646AB0"
            }
        }
    )
}

const Button = ({ children }) => {
    return <MUIButton sx={styles.btn}>{children}</MUIButton>
}

export default Button