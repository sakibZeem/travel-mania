import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Contact from '../pages/Contact/Contact';
import Booking from '../pages/Booking/Booking';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/destinations')
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>,
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'booking',
          element: <Booking></Booking>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }

      ]
    },
  ]);

export default router;