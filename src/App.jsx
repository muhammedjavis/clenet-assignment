import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Signup';
import RootLayout from './components/RootLayout';
import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/aboutus',
        element: <AboutUs />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
