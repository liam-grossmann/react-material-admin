import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { Welcome } from './components/Welcome';
import ErrorPage from './error-page';
import Root from './routes/root';

import './index.css'



import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        LinkComponent: LinkBehavior,
        
      },
    },
    MuiListItem: {
      defaultProps: {
        
      }
    }

  },
});


const themeWithNewSecondaryColor = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
}) 

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
        path: "about",
        element: <div>About page</div>,
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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
)