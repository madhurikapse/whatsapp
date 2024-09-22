import React from 'react'
import {AppBar,styled,Toolbar,Box} from "@mui/material"
import LoginDilaog from './account/LoginDilaog'

const Component=styled(Box)`
height:100vh;
background-color: #DCDC;
`


const Header=styled(AppBar)`
height:210px;
background-color: #00bfa5;

`

function Messanger() {
  return (
    
    <Component>
    <Header>
        <Toolbar>

        </Toolbar>
    </Header>
    <LoginDilaog/>
    </Component>

  )
}

export default Messanger
