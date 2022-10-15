import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Header } from '../header/header';
import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation, } from 'react-router-dom';
import React from 'react';
import { Paper, Typography } from '@mui/material';

interface ListItemLinkProps {
  key: string;
  to: string;
  primary: string;
  icon?: React.ReactElement;
}

// https://mui.com/material-ui/guides/routing/
// Use prop forwarding for the routing so that mui links are forwarded to 
// the react - router rather then the server
function ListItemLink(props: ListItemLinkProps) {
  const { key, to, primary, icon } = props;

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
    <ListItem key={key} disablePadding>
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
 
        
        <Toolbar />
        <Divider />
       
               
     
        <ListItemLink key='Home'  to='/' primary='Home' icon={<InboxIcon />}/>
        <ListItemLink key='About'  to='/about' primary='About' icon={<InboxIcon />}/>
        <ListItemLink  key='Typography' to='/typography' primary='Typography' icon={<InboxIcon />}/>
        <ListItemLink  key='Buttons' to='/buttons' primary='Buttons' icon={<InboxIcon />}/>
        <Divider />
        <ListItemLink  key='Settings' to='/settings' primary='Settings' icon={<InboxIcon />}/>
            
      </Drawer>


    </Box>

  )
};
