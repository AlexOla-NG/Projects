import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import HeroImage from '../images/illustration-working.svg';


const Hero = () => {
  return (
    <Stack>
{/* TODO: arrange items in stack */}
      <Box>
        <Box >
          <Typography variant='h2' component='h1' sx={ { color: 'neutral.veryDarkViolet', fontWeight: 800 } }>More than just shorter links</Typography>
          <Typography variant='body' component='p'>Build your brand's recognition and get detailed insights on how your links are performing </Typography>
        </Box>
        <Button
          variant='cyanBg'
          sx={ { borderRadius: 5 } }
        >
          SignUp
        </Button>


      </Box>
      <SvgIcon
        component={ HeroImage }
        viewBox='0 0 733 482'
        sx={ { width: '100%' } }
      />
    </Stack>
  );
};

export default Hero;