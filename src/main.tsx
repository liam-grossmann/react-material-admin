import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { MuiTextField } from './components/MuiTextField';
import { Welcome } from './components/Welcome';

import AppLayout from './layouts/appLayout';
import ErrorPageLayout from './layouts/errorPageLayout';
import SignInLayout from './layouts/signInLayout';
import SignUpLayout from './layouts/signUpLayout';
import ResetPasswordLayout from './layouts/resetPasswordLayout';

import { Users } from './components/users/users';
import { UserPanel, loader as userLoader } from './components/users/userPanel';
import { Customers } from './components/customers/customers';
import { Projects } from './components/projects/projects';



const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12.5,
  },
});


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
        path: "users",
        element: <Users />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "users/:userId",
        element: <UserPanel />,
        loader: userLoader,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorPageLayout />,
      },
      {
        path: "customers",
        element: <Customers />,
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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
)