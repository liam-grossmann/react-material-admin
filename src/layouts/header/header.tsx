import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from "react-router-dom";
import { SignedInUserAppBarButton } from './signedInUserAppBarButton';



// TODO: Pass this in as a prop
const drawerWidth = 14;

// Use react-router-dom's location hook to access the path and set an appropriate title.
function getHeaderTitleFromLocationPath(pathName : string) : string {
  let valueToReturn = location.pathname;
  if (pathName == '/') {
    valueToReturn = 'Home';
  } else {
    valueToReturn = pathName.substring(1, pathName.length).toLowerCase();
    valueToReturn = valueToReturn.substring(0, 1).toUpperCase() + valueToReturn.substring(1, valueToReturn.length);
  }
  return valueToReturn;
}



export const Header = () => {

  const location = useLocation();
  const breadCrumbsTiitle = getHeaderTitleFromLocationPath(location.pathname);

  

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
          {breadCrumbsTiitle}
        </Typography>

        <SignedInUserAppBarButton />
        
      </Toolbar>
    </AppBar>
  )
};