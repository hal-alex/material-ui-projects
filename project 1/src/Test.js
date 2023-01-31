import { Typography, Button, TextField, Box, Paper } from '@mui/material'
// import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

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
            <Divider light sx={{
                bgcolor: "black",
                m: 1,
            }} variant='middle'></Divider>
            <Divider light sx={{
                my: 1,
                borderBottomWidth: 5,
            }} variant='middle'>
                <Typography variant='h5'>Testing</Typography>
            </Divider>
            <Button size='large' variant="outlined" color='success'>
                Testing
            </Button>

            <Button sx={{
                background: "blue",
                color: "orange",
            }} size='large' variant="text">
                Testing
            </Button>
            <TextField type={"text"} label="Name"
                placeholder='Name' variant='outlined'></TextField>
            <TextField type={"email"} label="email"
                placeholder='email' variant='filled'></TextField>
            <TextField type={"password"} label="Name"
                placeholder='Name' variant='standard'></TextField>
            <Button disabled>Disabled</Button>
            <Box sx={{
                bgcolor: "primary.main",
                m: 1,
                p: 2,
            }}>
                I am a box
            </Box>

            <Paper elevation={24}>ff</Paper>
        </div>
    )
}

export default Test