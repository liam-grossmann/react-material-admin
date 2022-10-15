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


    </Box>

  )
};
