import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const sections = [
  { title: 'About Us Template', url: '/aboutus' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Logo Gallery', url: '/logo' },
];

const defaultTheme = createTheme();

export default function RootLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header sections={sections} />
      </Container>
      <Outlet />
    </ThemeProvider>
  );
}
