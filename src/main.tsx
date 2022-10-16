import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { MuiTextField } from './components/MuiTextField';
import { Welcome } from './components/Welcome';
import ErrorPage from './error-page';
import Root from './routes/root';

import './index.css'




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
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />,
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
        path: "settings",
        element: <div>Settings page</div>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)