import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import { DataService } from './services/DataService';
import { Settings } from './features/settings/settings';
import { IUser } from './domain/User';
import { SecurityContext } from './contexts/securityContext';

export default function MainRouter() {

  let dataService = new DataService();
  let defaultSignedInUser = dataService.getUser(3);
  const [signedInUser, setSignedInUser] = useState<IUser | undefined>(defaultSignedInUser);

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
      element: <SignInPage onSignIn={setSignedInUser}></SignInPage>,
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

  return (
    <SecurityContext.Provider value={signedInUser}>
      <RouterProvider router={router} />
    </SecurityContext.Provider>
  )
};