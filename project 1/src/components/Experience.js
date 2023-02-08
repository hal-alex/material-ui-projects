import React from "react"
import { Typography, Box, Link, Grid } from "@mui/material"

import dashboardPhoto from "../img/dashboard-photo.svg"
import landingPhoto from "../img/landing-page-photo.svg"
import illustrationPhoto from "../img/illustration-page-photo.svg"

const Experience = () => {
  const links = [
    "Show all",
    "Design",
    "Branding",
    "Development",
    "SEO",
    "UX/UI Design",
  ]

  const styles = {
    experience: (theme) => ({
      padding: "44px 20px",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      background: "gray",
      [theme.breakpoints.up("sm")]: {
        textAlign: "left",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "88px 20px",
      },
    }),
    wrapper: {
      maxWidth: "1240px",
    },
    links: (theme) => ({
      flexGrow: 1,
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "1240px",
      gap: "20px",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "100%",
        gap: "40px",
      },
    }),
    imgItem: (theme) => ({
      width: "100%",
      marginTop: "24px",
      maxWidth: "402px",
      [theme.breakpoints.up("sm")]: {
        marginTop: "44px",
      },
    }),
    contentTitle: (theme) => ({
      fontSize: "14px",
      lineHeight: "17px",
      textAlign: "left",
      marginTop: "12px",
      maxWidth: "402px",
      margin: "12px auto 0",
      ...theme.typography.someStyle,
      [theme.breakpoints.up("sm")]: {
        fontSize: "24px",
        lineHeight: "29px",
      },
    }),
  }

  return (
    <Box sx={styles.experience}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">professional experience</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          professional design agency that provides solutions
        </Typography>
        <Box sx={styles.links}>
          {links.map((link, index) => {
            return (
              <Link key={index} sx={styles.link}>
                {link}
              </Link>
            )
          })}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component="img"
                src={dashboardPhoto}
                sx={styles.imgItem}
              ></Box>
              <Typography sx={styles.contentTitle}>dashboard design</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box component="img" src={landingPhoto} sx={styles.imgItem}></Box>
              <Typography sx={styles.contentTitle}>landing pages</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component="img"
                src={illustrationPhoto}
                sx={styles.imgItem}
              ></Box>
              <Typography sx={styles.contentTitle}>
                illustration design
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Experience
