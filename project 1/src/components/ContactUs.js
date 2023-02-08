import { Box, Typography, TextField, TextareaAutosize } from "@mui/material"
import Button from "../components/Button"

import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import photo_send from "../img/photo_send_2.png"

const ContactUs = () => {
  const styles = {
    contactUs: (theme) => ({
      padding: "44px 20px",
      textAlign: "left",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        justifyContent: "center",
        padding: "200px 20px 190px",
      },
    }),
    wrapper: (theme) => ({
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1240px",
        display: "flex",
        alignItems: "center",
        gap: "120px",
      },
    }),
    info: (theme) => ({
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      },
    }),
    form: (theme) => ({
      maxWidth: "613px",
      [theme.breakpoints.up("sm")]: {
        margin: "auto",
      },
    }),
    imgInfo: {
      width: "16px",
      height: "16px",
      mr: "4px",
    },
    titleInfo: (theme) => ({
      color: `${theme.palette.slateBlue.main}`,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "capitalize",
      display: "flex",
      alignItems: "center",
    }),
    titleValue: {
      color: "black",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      marginTop: "3px",
    },
    itemBlockInfo: {
      marginBottom: "24px",
      flex: 1,
    },
    input: (theme) => ({
      display: "flex",
      gap: "25px",
      flexDirection: "column",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        gap: "20px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    }),
    textField: {
      width: "300px",
      // border: "2px solid blue",
      "& input::placeholder": {
        fontSize: "20px",
        lineHeight: "20px",
      },
    },
    photo: {
      width: "100%",
      margin: "44px auto 0",
      maxWidth: "508px",
      display: "block",
    },
    TextareaAutosize: {
      margin: "24px 0",
      padding: "12px",
      width: "100%",
      fontSize: "20px",
      lineHeight: "20px",
      border: "0.5px solid blue",
      borderRadius: "8px",
      outline: "none",
      boxSizing: "border-box",
    },
  }

  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography variant="h2"> contact us</Typography>
          <Typography variant="body1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
            blanditiis nostrum asperiores tempora impedit ducimus, molestias
            culpa sapiente, velit dolorem, quia nam excepturi! Eligendi commodi
            optio cum consectetur aut.
          </Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <MailOutlineIcon sx={styles.imgInfo}></MailOutlineIcon>
                email us
              </Box>
              <Box sx={styles.titleValue}>support@example.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <LocalPhoneIcon sx={styles.imgInfo}></LocalPhoneIcon>
                phone us
              </Box>
              <Box sx={styles.titleValue}>+0123456789</Box>
            </Box>
          </Box>
          <Box sx={styles.input}>
            <TextField
              placeholder="Full name"
              sx={styles.textField}
            ></TextField>
            <TextField
              placeholder="Email address"
              sx={styles.textField}
            ></TextField>
          </Box>
          <TextareaAutosize
            minRows={6}
            placeholder="Your message"
            sx={styles.TextareaAutosize}
          ></TextareaAutosize>
          <Button>
            send message <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        </Box>
        <Box component="img" src={photo_send} sx={styles.photo}></Box>
      </Box>
    </Box>
  )
}
export default ContactUs
