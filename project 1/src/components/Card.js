import * as React from 'react'
import Box from '@mui/material/Box'
import MUICard from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import arrowRight from "../img/arrow-right.svg"

const styles = {
    card: (theme) => ({
        fontFamily: "Montserrat",
        textAlign: "left",
        border: `0.5px solid ${theme.palette.slateBlue.main}`,
        boxShadow: "0px 4px 4px black",
        borderRadius: "8px",
        padding: "44px",
        width: "403px",
        boxSizing: "border-box",
        [theme.breakpoints.up("md")]: {
            maxWidth: "403px",
        }
    }),
    btn: (theme) => ({
        fontFamily: "Montserrat",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        textDecorationLine: "underline",
        textTransform: "capitalize",
        color: theme.palette.slateBlue.main,
    }),
    listItem: (theme) => ({
        fontFamily: "Montserrat",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "20px",
        textTransform: "capitalize",
        color: theme.palette.primary.main,
        padding: "12px 0"
    })
}

const Card = ({ title, imgSrc }) => {

    return (
        <MUICard sx={styles.card}>
            <CardContent sx={{ padding: 0 }}>
                <Box component="img" src={imgSrc}></Box>
                <Typography variant="h3">{title}</Typography>
                <List>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" src={arrowRight} sx={{ mr: "5px" }}></Box>
                        product management
                    </ListItem>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" src={arrowRight} sx={{ mr: "5px" }}></Box>
                        mvp definition
                    </ListItem>
                    <ListItem sx={styles.listItem}>
                        <Box component="img" src={arrowRight} sx={{ mr: "5px" }}></Box>
                        product strategy
                    </ListItem>
                </List>
            </CardContent>
            <CardActions sx={{ padding: 0 }}>
                <Button sx={styles.btn}>
                    read more
                    <Box component="img" src={arrowRight}></Box>
                </Button>
            </CardActions>
        </MUICard>
    )
}

export default Card