import { Container, Typography, Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../store/ContrastContext';

export default function AboutUs() {
  const { isHighContrast } = useContext(ThemeContext);
  return (
    <Container maxWidth='md'>
      <Typography variant='h4'>About Us</Typography>
      <Grid container alignItems='center' spacing={2}>
        <Grid item>
          <Button
            variant='contained'
            color={isHighContrast ? 'warning' : 'secondary'}
          >
            Download now!
          </Button>
        </Grid>
      </Grid>

      <Typography
        variant='body1'
        style={{ textAlign: 'center', marginTop: '20px', marginLeft: '20px' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante
        urna. Fusce sollicitudin dictum magna. Maecenas ac risus vitae ipsum
        accumsan venenatis. Phasellus ac massa nec dui fermentum dignissim.
      </Typography>

      <Grid container alignItems='center' justifyContent='center' spacing={2}>
        <Grid item>
          <img
            src='https://via.placeholder.com/300'
            alt='Random Image'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
