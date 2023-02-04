import photo_banner from "../img/photo_banner.png"
import { Box } from "@mui/system"
import CustomButton from "./Button"
import { Typography } from "@mui/material"

const styles = {
    hero: (theme) => ({
        padding: "20px",
        [theme.breakpoints.up("lg")]: {
            display: "flex",
            justifyContent: "center",
            padding: "44px",

        }
    }),
    wrapper: (theme) => ({
        padding: "20px",
        [theme.breakpoints.up("md")]: {
            maxWidth: "1240px",
            display: "flex",
            alignItems: "center",
            gap: "35px",
            padding: "44px",

        }
    }),
    photo: {
        width: "100%",
        maxWidth: "509px",
        display: "block",
        margin: "44px auto 0",
    },
    text: (theme) => ({
        margin: "25px 0px",
        [theme.breakpoints.up("md")]: {
            marginBottom: "44px",
        }
    })
}

const Hero = () => {


    return (
        <Box sx={styles.hero}>
            <Box sx={styles.wrapper}>
                <Box sx={{ textAlign: "left" }}>
                    <Typography variant="h2">
                        Sample text
                    </Typography>
                    <Typography variant="body1" sx={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo quam, rutrum in sodales aliquam, posuere eget justo. Ut non diam lobortis, facilisis orci vitae, congue nisl. Nullam elementum, odio a aliquam egestas, turpis elit gravida lectus, at vulputate magna ante sit amet arcu. Nunc non ante urna. Integer vitae turpis purus. Pellentesque tincidunt hendrerit massa a pellentesque. Aliquam erat volutpat. Vivamus arcu nibh, convallis ac suscipit id, gravida et erat. Donec at tristique turpis. Cras interdum velit in nunc iaculis, nec aliquet urna gravida. Nullam id ullamcorper ligula.
                        <br></br>
                        Testing text
                    </Typography>
                    <CustomButton>Join us</CustomButton>

                </Box>
                <Box component="img" src={photo_banner} sx={styles.photo}>
                </Box>

            </Box>
        </Box>
    )
}

export default Hero