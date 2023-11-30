import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Signup';
import RootLayout from './components/RootLayout';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import LogoGallery from './components/LogoGallery';
import { ThemeProvider } from '../store/ContrastContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <RootLayout />
        <AboutUs />
      </>
    ),
  },

  {
    path: '/aboutus',
    element: (
      <>
        <RootLayout />
        <AboutUs />
      </>
    ),
  },
  {
    path: '/blogs',
    element: (
      <>
        <RootLayout />
        <Blogs />
      </>
    ),
  },
  {
    path: '/logo',
    element: (
      <>
        <RootLayout />
        <LogoGallery />
      </>
    ),
  },

  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
