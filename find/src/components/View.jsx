import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState }  from 'react'

const View = () => {
    var[users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
    },[])
  
return (
    <div>
        <br/><br/><br/><br/>
        <Typography variant='h3' style={{color:"red", fontFamily:"serif"}}> Axios View </Typography>
        <br/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell> Name </TableCell>
                    <TableCell> Email </TableCell>
                </TableHead>
            <TableBody>
                {users.map((value,index)=>{
                    return (
                        <TableRow key={index}>
                            <TableCell> {value.name} </TableCell>
                            <TableCell>{value.email}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
)
}

export default View