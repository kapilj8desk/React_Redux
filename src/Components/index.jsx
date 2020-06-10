import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator.jsx';
import Content from './Content.jsx';
import Header from './Header.jsx';
import api from '../Utils/api';

// using matieralUI for styling
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#222f40',
      },
    },
  },
};

function Index() {
  api.getServices();
  api.getProviders();

  const classes = {
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: '25%',
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      padding: theme.spacing(6, 4),
      background: '#eaeff1',
    },
    footer: {
      padding: theme.spacing(2),
      background: '#eaeff1',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: '20%' } }}
              variant="temporary"
              open={true}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: '20%' } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header />
          <main className={classes.main}>
            <Content />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Index;