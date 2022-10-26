import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import { Header } from '../header/header';

// https://mui.com/material-ui/material-icons/?query=tex
import HomeIcon from '@mui/icons-material/Home';
import UsersIcon from '@mui/icons-material/AccountBox';
import ProjectsIcon from '@mui/icons-material/Code';
import CustomersIcon from '@mui/icons-material/People';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BugReportIcon from '@mui/icons-material/BugReport';
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
import { IUser } from '../../domain/User';


// go back to this: https://stackblitz.com/run?file=demo.tsx
// this needs work. The side panel needs a lot of work.



export interface ISidePanelProps {
  signedInUser: IUser;
} 


export const SidePanel = (props: ISidePanelProps) => {

  const drawerWidth = 14;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header signedInUser={props.signedInUser}></Header>

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
          <Typography variant="caption" display="block">Version 0.0.3</Typography>
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

        <ListItemLink to='/sales' primary='Sales' icon={<AttachMoneyIcon />} />
        <ListItemLink to='/tickets' primary='Tickets' icon={<BugReportIcon />} />
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
