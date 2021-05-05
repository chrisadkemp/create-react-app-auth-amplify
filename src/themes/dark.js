import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00FF00',
    },
    secondary: {
      main: '#004225',
    },
    text: {
      primary: '#f8f8ff',
      secondary: '#d80000',
    },
    background: {
      default: '#131722',
    },
    contrastThreshold: 1.8,
  },
});

export default theme;
