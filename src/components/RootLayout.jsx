import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';

const sections = [
  { title: 'About Us', url: '#' },
  { title: 'Blogs', url: '#' },
  { title: 'Logo Gallery', url: '#' },
];

const defaultTheme = createTheme();

export default function RootLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header sections={sections} />
      </Container>
    </ThemeProvider>
  );
}
