import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { MuiTextField } from './components/MuiTextField';
import { Welcome } from './components/Welcome';
import ErrorPageLayout from './layouts/errorPageLayout';
import AppLayout from './layouts/appLayout';

import './index.css'
import { Users } from './components/Users';
import SignInLayout from './layouts/signInLayout';
import SignUpLayout from './layouts/signUpLayout';
import ResetPasswordLayout from './layouts/resetPasswordLayout';




/* use     <ThemeProvider theme={theme}> below to use this theme
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
}) 
*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPageLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "typography",
        element: <MuiTypography />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "buttons",
        element: <MuiButton />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "textfield",
        element: <MuiTextField />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "users",
        element: <Users />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "settings",
        element: <div>Settings page</div>,
        errorElement: <ErrorPageLayout />,
      },
    ],
  }, {
    path: "/signin",
    element: <SignInLayout></SignInLayout>,
    errorElement: <ErrorPageLayout />,
  }, {
    path: "/signup",
    element: <SignUpLayout></SignUpLayout>,
    errorElement: <ErrorPageLayout />,
  },
  {
    path: "/resetpassword",
    element: <ResetPasswordLayout></ResetPasswordLayout>,
    errorElement: <ErrorPageLayout />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)