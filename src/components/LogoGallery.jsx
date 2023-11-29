import { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const imageUrls = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const LogoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
  };

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
      flexDirection='column'
      textAlign='center'
    >
      <Box my={4} textAlign='center'>
        <Typography variant='h4' style={{ paddingLeft: '20px' }}>
          Find the perfect logo for Dude
        </Typography>
      </Box>
      <Box width='100%' display='flex' justifyContent='center'>
        <Paper
          elevation={3}
          style={{ padding: '20px', maxWidth: '800px', width: '100%' }}
        >
          <Grid container spacing={2}>
            {imageUrls.map((url, index) => (
              <Grid key={index} item xs={6} sm={3}>
                <img
                  src={url}
                  alt={`Logo ${index}`}
                  style={{
                    width: '100%',
                    border: index === selectedImage ? '2px solid blue' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleImageSelect(index)}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default LogoGallery;
