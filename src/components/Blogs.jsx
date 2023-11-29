import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Blogs() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4' align='left'>
              Website
            </Typography>
            <Typography variant='body1'>
              Tips and tutorials on how to build a website
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link
              to='#'
              style={{
                textDecoration: 'none',
              }}
            >
              <Box bgcolor='#f5f5f5' p={2} borderRadius={4} textAlign='center'>
                <Box maxWidth='500px' mx='auto'>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <img
                        src='https://via.placeholder.com/300x200'
                        alt='Article Thumbnail'
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Box p={2}>
                        <Typography variant='h6'>Article Heading</Typography>
                        <Typography variant='body1'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          By Author Name | Date
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
