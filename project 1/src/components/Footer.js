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

  const styles = {}

  return (
    <Box sx={styles.footer}>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={styles.gridWrapper}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" sx={styles.linkTitle}>
              services
            </Typography>
            <List>
              {services.map((service, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {service}
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
              {links.map((link, index) => {
                return (
                  <ListItem sx={styles.itemList} key={index}>
                    {link}
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
                    {typeof item === "string" ? (
                      <Box component="img" src={item.img}></Box>
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
        <Grid item xs={6} sm={4} md={2} sx={styles.emailBlock}>
          <Box sx={styles.subscribeFooter}>
            <Typography variant="h3" sx={styles.title}>
              subscribe to email
            </Typography>
            <Typography sx={styles.text}>
              {" "}
              check out our latest developers
              <Link>terms and conditions</Link>
            </Typography>
            <Paper component="form" sx={styles.paper}>
              <InputBase
                sx={styles.inputBase}
                placeholder="your email"
              ></InputBase>
              <Button sx={styles.btn}>Subscribe</Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Footer
