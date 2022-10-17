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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import TitleIcon from '@mui/icons-material/Title';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PeopleIcon from '@mui/icons-material/People';

import logo from './../../assets/logo.svg';


import { Paper, Typography } from '@mui/material';

interface ListItemLinkProps {
  to: string;
  primary: string;
  icon?: React.ReactElement;
}

// https://mui.com/material-ui/guides/routing/
// Use prop forwarding for the routing so that mui links are forwarded to 
// the react - router rather then the server
function ListItemLink(props: ListItemLinkProps) {
  const { to, primary, icon } = props;



  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
        itemProps,
        ref,
      ) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <ListItem key={primary} disablePadding>
      <ListItemButton component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  );
}





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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Monitron</Typography>
        </Toolbar>
        <Divider />
       
        <ListItemLink   to='/' primary='Home' icon={<HomeIcon />}/>
        <ListItemLink  to='/typography' primary='Typography' icon={<TitleIcon />}/>
        <ListItemLink  to='/buttons' primary='Buttons' icon={<SmartButtonIcon />} />
        <ListItemLink  to='/textfield' primary='TextField' icon={<TextFieldsIcon />} />
        <Divider />
        <ListItemLink  to='/users' primary='Users' icon={<PeopleIcon />} />
        <Divider />
        <ListItemLink   to='/settings' primary='Settings' icon={<InboxIcon />}/>
            
      </Drawer>


    </Box>

  )
};
