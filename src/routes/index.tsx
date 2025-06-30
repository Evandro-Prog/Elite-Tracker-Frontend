import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/login';
import { Habits } from '../containers/habits';
import { Auth } from '../containers/auth';
import { PrivateRoute } from './privateRoute';
import { Focus } from '../containers/focus';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute component={<Habits />} />,
  },
  {
    path: '/focus',
    element: <PrivateRoute component={<Focus />} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/autenticacao',
    element: <Auth />,
  },
]);
