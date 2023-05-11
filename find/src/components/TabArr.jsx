import React, { useState } from 'react'
import {  Typography, TableContainer, Table, TableHead, TableBody, TableCell, TableRow} from '@mui/material'

const TabArr = () => {
    var [names] = useState(["AKASH","NIKHIL","ABINAS","AJAY"])
return (
    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Typography variant="h2">Table & Array</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color : "red"}}>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return  <TableRow>
                            <TableCell>{value}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
)
}

export default TabArr