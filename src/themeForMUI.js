import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D6EFD',
    },
    secondary: {
      main: '#0044ff',
    },
  },
  button: {
    borderRadius: '6px',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '26px',
  },
});

theme.typography.h2 = {
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '120%',
  color: '#212121',
};

theme.typography.h3 = {
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '140%',
  color: '#616161',
};

theme.typography.subtitle1 = {
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '120%',
  color: '#2A3239',
};

theme.typography.subtitle2 = {
  fontFamily: 'Roboto',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '120%',
  color: '#0D6EFD',
};

export default theme;