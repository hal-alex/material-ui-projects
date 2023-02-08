import { useState } from "react"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import Navbar from "./Navbar"
import Drawer from "./Drawer"

import logo_desk from "../img/logo_desk.svg"
import logo_mob from "../img/logo_mob.svg"
import burger_menu from "../img/burger_menu.svg"

const styles = {
  appBar: (theme) => ({
    background: "white",
    boxShadow: "none",
    [theme.breakpoints.up("lg")]: {
      borderBottom: "0.5px solid black",
      padding: "20px 0",
      margin: "auto",
      maxWidth: "1240px",
    },
  }),
  container: (theme) => ({
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      margin: 0,
    },
  }),

  logoDesk: {
    mr: 2,
    display: {
      xs: "none",
      lg: "flex",
    },
    flexGrow: 1,
  },
  logoMob: {
    mr: 2,
    display: {
      xs: "flex",
      lg: "none",
    },
    flexGrow: 1,
  },
}

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}></Drawer>
        <Toolbar disableGutters>
          <Typography component="a" href="/" sx={styles.logoDesk}>
            <img src={logo_desk} alt="logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                lg: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} alt="burger-menu" />
            </IconButton>
          </Box>
          <Typography component="a" href="/" sx={styles.logoMob}>
            <img src={logo_mob} alt="logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          >
            <Navbar></Navbar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
