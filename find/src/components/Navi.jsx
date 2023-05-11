import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navi = () => {
  return (
    <div>
        <AppBar>
  <Toolbar>
    <Typography align='left' sx={{flexGrow: 1}} >Trial Bar</Typography>
    <Button > <Link to={"/state"} style={{color : "white"}}>STATE</Link></Button>
    <Button > <Link to={"/table"} style={{color : "white"}}>TABLE</Link></Button>
    <Button > <Link to={"/View"} style={{color : "white"}}>VIEW</Link></Button>
  </Toolbar>
</AppBar>
    </div>
  )
}

export default Navi