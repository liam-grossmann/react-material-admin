import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { Welcome } from './components/Welcome';
import ErrorPage from './error-page';
import Root from './routes/root';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />
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
        element: <div>About page</div>
      },
      {
        path: "settings",
        element: <div>Settings page</div>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)