import { Button, Box } from "@mui/material"
import MUIButton from "./Button"
import arrow from "../img/chevron-down.svg"

const pages = [
    { title: "Demos", arrow: true },
    { title: "Services", arrow: true },
    { title: "Pages", arrow: true },
    { title: "Portfolio", arrow: true },
    { title: "Blog", arrow: true },
    { title: "Contact", arrow: false },
]

const styles = {
    btnLink: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",
        textTransform: "capitalize",
        display: "flex",
        padding: "0",
        marginRight: "44px",
        color: "black",
        marginBottom: "10px",
    }
}

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}>
            {pages.map((page, index) => (
                <Button sx={styles.btnLink} key={index}>
                    {page.title}{page.arrow && (
                        <img src={arrow} style={{ marginLeft: "5px" }} alt="arrow" />
                    )}
                </Button>
            ))}
        </Box>
    )
}

export default Navbar