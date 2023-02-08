import { Box, IconButton } from "@mui/material"
import MUIDrawer from "@mui/material/Drawer"
import close from "../img/close.svg"
import Navbar from "./Navbar"

const Drawer = ({ open, onClose }) => {
  return (
    <MUIDrawer
      PaperPros={{
        sx: {
          width: "100%",
        },
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          padding: "2px",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            padding: 0,
            marginLeft: "5px",
          }}
        >
          <img src={close} alt="close" />
        </IconButton>
        <Box
          sx={{
            padding: "44px",
          }}
        >
          <Navbar></Navbar>
        </Box>
      </Box>
    </MUIDrawer>
  )
}

export default Drawer
