import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './assets/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { MuiButton } from './features/muiExamples/MuiButton';
import { MuiTypography } from './features/muiExamples/MuiTypography';
import { MuiTextField } from './features/muiExamples/MuiTextField';
import { Dashboard } from './features/dashboard/dashboard';

import AppPage from './pages/appPage';
import ErrorPage from './pages/errorPage';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';
import ResetPasswordPage from './pages/resetPasswordPage';

import { Users } from './features/users/users';
import { UserPanel, loader as userLoader } from './features/users/userPanel';
import { Customers } from './features/customers/customers';
import { CustomerPanel, loader as customerLoader } from './features/customers/customerPanel';
import { Projects } from './features/projects/projects';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DataService } from './services/DataService';
import { SecurityContext } from './contexts/securityContext';
import { Settings } from './features/settings/settings';



const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12.5,
  },
});

let dataService = new DataService();
let signedInUser = dataService.getUser(3);



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "users",
        element: <Users />,
        errorElement: <ErrorPage />,
      },
      {
        path: "users/:userId",
        element: <UserPanel />,
        loader: userLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "customers",
        element: <Customers />,
        errorElement: <ErrorPage />,
      },
      {
        path: "customers/:customerId",
        element: <CustomerPanel />,
        loader: customerLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "typography",
        element: <MuiTypography />,
        errorElement: <ErrorPage />,
      },
      {
        path: "buttons",
        element: <MuiButton />,
        errorElement: <ErrorPage />,
      },
      {
        path: "textfield",
        element: <MuiTextField />,
        errorElement: <ErrorPage />,
      },
      {
        path: "users",
        element: <Users />,
        errorElement: <ErrorPage />,
      },
      {
        path: "sales",
        element: <div>Sales</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "tickets",
        element: <div>Tickets</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "settings",
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
    ],
  }, {
    path: "/signin",
    element: <SignInPage></SignInPage>,
    errorElement: <ErrorPage />,
  }, {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resetpassword",
    element: <ResetPasswordPage></ResetPasswordPage>,
    errorElement: <ErrorPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <SecurityContext.Provider value={signedInUser}>
          <RouterProvider router={router} />
        </SecurityContext.Provider>
      </ThemeProvider>
      </LocalizationProvider>
  </React.StrictMode>
)