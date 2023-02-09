import React from "react"
import {
  Box,
  Link,
  List,
  ListItem,
  Paper,
  InputBase,
  Button,
  Grid,
} from "@mui/material"

import Typography from "@mui/material/Typography"

import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import behince from "../img/behince.svg"
import medium from "../img/medium.svg"
import dribble from "../img/dribble.svg"

const Footer = () => {
  const styles = {
    footer: (theme) => ({
      maxWidth: "1240px",
      padding: "44px 20px",
      textAlign: "left",
      margin: "auto",
      [theme.breakpoints.up("lg")]: {
        padding: "88px 20px",
      },
    }),
    gridWrapper: (theme) => ({
      padding: "44px 0px",
      borderTop: `0.5px solid ${theme.palette.slateBlue.main}`,
      borderBottom: `0.5px solid ${theme.palette.slateBlue.main}`,
      rowGap: "24px",
      [theme.breakpoints.up("lg")]: {
        padding: "88px 0px",
      },
    }),
    linkTitle: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "29px",
    },
    title: (theme) => ({
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "29px",
      [theme.breakpoints.up("lg")]: {
        fontSize: "48px",
        lineHeight: "59px",
      },
    }),
    text: (theme) => ({
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "28px",
      marginTop: "24px",
      color: "#000000",
      textTransform: "capitalize",
      [theme.breakpoints.up("lg")]: {
        fontSize: "16px",
        lineHeight: "28px",
      },
    }),
    paper: {
      p: "8px",
      display: "flex",
      alignItems: "center",
      background: "#F5F5F5",
      borderRadius: "8px",
      boxShadow: "none",
      marginTop: "20px",
    },
    btn: (theme) => ({
      background: `${theme.palette.slateBlue.main}`,
      borderRadius: "8px",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "capitalize",
      color: "#fff",
      p: "12px",
      width: "131px",
    }),
    itemList: {
      p: "12px 0",
      color: "#686868",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      textTransform: "capitalize",
    },
    subscribeFooter: (theme) => ({
      width: "100%",
      maxWidth: "372px",
      [theme.breakpoints.up("lg")]: {
        width: "372px",
      },
    }),

    icon: {
      width: "16px",
      height: "16px",
      color: "#777FEB",
    },
    emailBlock: (theme) => ({
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        justifyContent: "flex-end",
      },
    }),
    inputBase: {
      ml: 1,
      flex: 1,
      "& input::placeholder": {
        fontSize: "20px",
        lineHeight: "20px",
      },
    },
  }

  const services = [
    "UX/UI Design",
    "Development",
    "SEO",
    "Product Design",
    "Logo",
    "Brand",
  ]

  const links = [
    "about agency",
    "latest news & blog",
    "meet the team",
    "popular services",
    "testimonials",
    "neeed a Career?",
  ]

  const follow = [
    { title: "dribbble", img: dribble },
    { title: "instagram", img: <InstagramIcon sx={styles.icon} /> },
    { title: "twitter", img: <TwitterIcon sx={styles.icon} /> },
    { title: "behince", img: behince },
    { title: "facebook", img: <FacebookIcon sx={styles.icon} /> },
    { title: "medium", img: medium },
  ]

  return (
    <Box sx={styles.footer}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={styles.gridWrapper}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              services
            </Typography>
            <List>
              {services.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              links
            </Typography>
            <List>
              {links.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {item}
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              follow
            </Typography>
            <List>
              {follow.map((item, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {typeof item.img === "string" ? (
                      <Box component="img" src={item.img} />
                    ) : (
                      item.img
                    )}
                    <Box component="span" sx={{ marginLeft: "5px" }}>
                      {item.title}
                    </Box>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={styles.emailBlock}>
          <Box sx={styles.subsribeFooter}>
            <Typography variant="h3" sx={styles.title}>
              subscribe our newsletter
            </Typography>
            <Typography sx={styles.text}>
              Lorem ipsum dolor sit amet,{" "}
              <Link sx={{ color: "#777FEB" }}> consectetur adipiscing </Link>
              elit.consectetur. psum dolor sit am psum dolor sit am.{" "}
            </Typography>
            <Paper component="form" sx={styles.paper}>
              <InputBase sx={styles.inputBase} placeholder="Email address" />
              <Button sx={styles.btn}>sign up</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Footer
