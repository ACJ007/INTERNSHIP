import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Basics = () => {
return (
    <div>
        <h1>AKASH CHEM J</h1>
        <Typography variant='h1'  color="#3609ff">ACJ</Typography>
        <br></br>
        <TextField label='mail-id' variant='filled'/>
        <br></br>
        <br></br>

        <Typography variant='h5'>Text Button</Typography>
        <br></br>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <br></br>
        <br></br>
        <br></br>

        <Typography variant='h5'>Contained Button</Typography>
        <br></br>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
        Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
        Link
        </Button>
        <br></br>
        <br></br>
        <br></br>

        <Typography variant='h5'>Outlined Button</Typography>
        <br></br>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
        Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
        Link
        </Button>
        <br></br>
        <br></br>

        <Typography variant='h5'>Color</Typography>
        <br></br>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
        Success
        </Button>
        <Button variant="outlined" color="error">
        Error
        </Button>
    </div>
)
}

export default Basics
