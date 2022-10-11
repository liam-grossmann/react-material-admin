import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  import { MuiTypography } from './../MuiTypography';
  import { MuiButton } from './../MuiButton';

export const SidePanel = () => {

 

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
             <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React-Material-Admin
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>

      </AppBar>

<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
       
               
            <ListItem key='Home' disablePadding>
              <ListItemButton href='/'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
                </ListItem>
                
                <ListItem key='About' disablePadding>
              <ListItemButton href='/about'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary='About' />
              </ListItemButton>
                </ListItem>
                
                <ListItem key='Users' disablePadding>
              <ListItemButton href='/users'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary='Users' />
              </ListItemButton>
                </ListItem>

                <ListItem key='Typography' disablePadding>
              <ListItemButton href='/typography'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary='Typography' />
              </ListItemButton>
                </ListItem>

                <ListItem key='Buttons' disablePadding>
              <ListItemButton href='/buttons'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary='Buttons' />
              </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem key='Setting' disablePadding>
              <ListItemButton href='/settings'>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
                </ListItem>

            
        </Drawer>
            
            <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
                <Toolbar />
                


                <div>

     {/*
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li> 
    <li>
      <Link to="/typography">Typography</Link>
    </li> 
    <li>
      <Link to="/buttons">Buttons</Link>
    </li> 
  </ul>
</nav> */}

  <Routes>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/users" element={<Users />}></Route>
    <Route path="/typography" element={<MuiTypography />}></Route>
                        <Route path="/buttons" element={<MuiButton />}></Route>
                        <Route path="/settings" element={<Settings/>}></Route>
    <Route path="/" element={<Home/>} ></Route>
  </Routes> 
</div>

                


      </Box>
    </Box>


    )
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

  function Settings() {
    return <h2>Settings</h2>;
  }
  

