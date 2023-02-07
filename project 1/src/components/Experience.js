import React from 'react'
import { Typography, Box, Link, Grid } from '@mui/material'

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
        "UX/UI Design"
    ]

    const styles = {}

    return (
        <Box sx={styles.experience}>
            <Box sx={styles.wrapper}>
                <Typography variant="h2">
                    professional experience
                </Typography>
                <Typography variant="body1"
                    sx={{ textTransform: "capitalize", margin: "25px 0" }}>
                    professional design agency that provides solutions
                </Typography>
                <Box sx={styles.links}>
                    {links.map((link, index) => {
                        return (
                            <Link key={index} sx={styles.link}>{link}</Link>
                        )
                    })}
                </Box>
                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent="center">
                    <Grid item xs={6} sm={4} md={4}>
                        <Box>
                            <Box component="img" src={dashboardPhoto}
                                sx={styles.imgItem}
                            >
                            </Box>
                            <Typography sx={styles.contentTitle}>
                                dashboard design
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default Experience