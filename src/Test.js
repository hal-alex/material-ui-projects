import React from 'react'
import { Typography, Button, TextField } from '@mui/material'
// import Button from '@mui/material/Button'

const Test = () => {
    return (
        <div>
            <Typography variant="h1"
                sx={{
                    color: "red",
                    border: "1px solid black",

                }}
            >
                Hello
            </Typography>
            <Button
                onClick={() => alert("Button clicked")}
                size='large' variant="contained" color='primary' >
                Testing
            </Button>
            <Button size='large' variant="outlined" color='success'>
                Testing
            </Button>
            <Button size='large' variant="text">
                Testing
            </Button>
            <TextField type={"text"} label="Name" placeholder='Name' variant='outlined'></TextField>
            <TextField type={"email"} label="email" placeholder='email' variant='filled'></TextField>
            <TextField type={"password"} label="Name" placeholder='Name' variant='standard'></TextField>
        </div>
    )
}

export default Test