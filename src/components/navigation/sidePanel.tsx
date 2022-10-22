import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Header } from '../header/header';
import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation, } from 'react-router-dom';
import React from 'react';

// https://mui.com/material-ui/material-icons/?query=tex
import HomeIcon from '@mui/icons-material/Home';
import UsersIcon from '@mui/icons-material/AccountBox';
import ProjectsIcon from '@mui/icons-material/Code';
import CustomersIcon from '@mui/icons-material/People';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import TitleIcon from '@mui/icons-material/Title';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import TextFieldsIcon from '@mui/icons-material/TextFields';


import SignInIcon from '@mui/icons-material/Login';
import SignOutIcon from '@mui/icons-material/Logout';
import SignUpIcon from '@mui/icons-material/LockOpen';
import ResetPasswordIcon from '@mui/icons-material/LockReset';

import logo from './../../assets/logo.svg';


import { Typography } from '@mui/material';
import { ListItemLink } from './listItemLink';


// go back to this: https://stackblitz.com/run?file=demo.tsx
// this needs work. The side panel needs a lot of work.
export const SidePanel = () => {

  const drawerWidth = 14;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header></Header>

      <Drawer
        sx={{
          width: `${drawerWidth}rem`,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: `${drawerWidth}rem`,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      > 
        
        <Toolbar>
          <div className='logoImage'>
            <img src={logo}></img>
          </div>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Monitron
          <Typography variant="caption" display="block">Version 0.0.1</Typography>
          </Typography>
        </Toolbar>
        <Divider />
       
        <ListItemLink to='/' primary='Home' icon={<HomeIcon />} />
        <ListItemLink to='/users' primary='Users' icon={<UsersIcon />} />
        <ListItemLink to='/projects' primary='Projects' icon={<ProjectsIcon />} />
        <ListItemLink to='/customers' primary='Customers' icon={<CustomersIcon />} />
        <Divider />

        {/*
        <ListItemLink  to='/typography' primary='Typography' icon={<TitleIcon />}/>
        <ListItemLink  to='/buttons' primary='Buttons' icon={<SmartButtonIcon />} />
        <ListItemLink  to='/textfield' primary='TextField' icon={<TextFieldsIcon />} />
        <Divider />
      */}

        <ListItemLink to='/settings' primary='Settings' icon={<InboxIcon />} />
        <Divider />

        <ListItemLink to='/signin' primary='Sign In' icon={<SignInIcon />} />
        <ListItemLink to='/signin' primary='Logout' icon={<SignOutIcon />} />
        <ListItemLink to='/signup' primary='Register' icon={<SignUpIcon />} />
        <ListItemLink to='/resetpassword' primary='Reset Password' icon={<ResetPasswordIcon />} />
            
      </Drawer>
    </Box>
  )
};
