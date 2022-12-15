import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import propTypes from 'prop-types'

function Copyright({customFontColor}) {
  return (
    <Typography variant="body2" color={customFontColor}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/lionheartSG">
        Abdul Rafi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter({customBackground, customFontColor}) {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Box
        component="footer"
        sx={{
          py: 10,
          px: 2,
          mt: 'auto',
          backgroundColor: customBackground,
          color: customFontColor
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My Score Page
          </Typography>
          <Copyright/>
        </Container>
      </Box>
    </Box>
  );

}

StickyFooter.propTypes = {
  customBackground: propTypes.string,
  customFontColor: propTypes.string
};
