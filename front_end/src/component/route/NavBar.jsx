import React from 'react';

import{
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
}from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const NavBar = () =>{
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" style={style}>
                        React User Application
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
const style = {
    flexGrow : 1
}
export default NavBar;