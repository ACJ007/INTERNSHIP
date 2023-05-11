import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StBa = () => {
    var[pname,setPname] = useState("CJ");
    var[data,setData] = useState();
    const changeName = ()=>{
        console.log("clicked");
        setPname(data);
    }
    const readValue = (e) => {
        setData(e.target.value)
        console.log(data);
    }
return (
    <div>
<br/><br/><br/><br/><br/><br/>
        <Typography variant='h1'> AKASH {pname} </Typography>
        <TextField label='enter text' variant='filled' onChange={readValue}></TextField>
        <Button variant="contained"  onClick={changeName}>CHANGE</Button>
    </div>
)
}

export default StBa