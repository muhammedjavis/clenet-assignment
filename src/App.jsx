import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Signup';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
