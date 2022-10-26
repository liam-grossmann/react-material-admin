import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../domain/User";

export interface ISignedInUserAppBarButtonProps {
  signedInUser: IUser;
}

export const SignedInUserAppBarButton = (props: ISignedInUserAppBarButtonProps) => {

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [signedInUser, setSignedInUser] = useState<IUser | undefined>(props.signedInUser);

  const userMenuItems = ['Profile', 'Dashboard', 'Logout'];

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('signin');
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleUserMenuItemClick(menuItem: string) : void {
    if (menuItem === 'Profile') {
      navigate('./../users/' + signedInUser?.id);
    } else if (menuItem === 'Dashboard') {
      navigate('./');
    } else if (menuItem === 'Logout') {
      navigate('signin');
    }
  }

  // Return a login button OR return the signed in user button avatar with a drop down menu
  return (
    <>
      {!signedInUser ?
        <Button color="inherit" onClick={handleLoginClick}>Login</Button>
        :
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={signedInUser?.firstName + ' ' + signedInUser?.lastName} src={signedInUser?.avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {userMenuItems.map((menuItem) => (
              <MenuItem key={menuItem} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={() => handleUserMenuItemClick(menuItem)}>{menuItem}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      }
    </>

  )
}


