import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

    const Ba = () =>{
        var [val,setVal] = useState({NAME :"",PLACE :"",AGE :""})
        const inputHandler = (e) =>{
            const{name,value} = e.target
            setVal(({...val,[name]:value}))
        }

return (
    <div>
        <br></br>
        <br></br>
        <TextField label="name" name="name" value={val.name} onChange={inputHandler}/>
        <br></br>
        <Typography color="red"> NAME : {val.name} </Typography>
        <br></br>
        <br></br>
        <TextField label="place" name="place" value={val.place} onChange={inputHandler}/>
        <br></br>
        <br></br>
        <Typography color="red"> PLACE : {val.place} </Typography>
        <br></br>
        <br></br>
        <TextField label="age" name="age" value={val.age} onChange={inputHandler}/>
        <br></br>
        <br></br>
        <Typography color="red"> AGE : {val.age} </Typography>
    </div>
)
}

export default Ba