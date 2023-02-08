import { Box, Typography, TextField, TextareaAutosize } from "@mui/material"
import Button from "../components/Button"

import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import photo_send from "../img/photo_send_2.png"

const ContactUs = () => {
  const styles = {}

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
