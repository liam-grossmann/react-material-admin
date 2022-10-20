import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useNavigate } from "react-router-dom";


// TODO: Pass this in as a prop
const drawerWidth = 14;



export const Header = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('signin');
  }


 // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  setValue(event.target.value)
//}

  return (



    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}rem)`, ml: `${drawerWidth}rem` }}
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
        <Button color="inherit" onClick={handleLoginClick}>Login</Button>
      </Toolbar>
    </AppBar>
  )
};