import {React, lazy} from 'react';

// const Home = React.lazy(() => import('./views/index/index'));

// DASHBOARD
const Dashboard = lazy(() => import('./views/pages/dashboard/Dashboard'));

// LOGIN
const Login = lazy(() => import('./views/pages/login/Login'));

const Routes = [
  { path: '/', exact: true, name: 'Home', component: Dashboard },
  { path: '/login', name: 'Login', element: Login },
]

export default Routes
