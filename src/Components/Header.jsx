import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  sidebar_2: {
    marginLeft: '20%'
  },
  secondaryBar: {
    zIndex: 0,
  },
  button: {
    borderColor: lightColor,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
});


function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.sidebar_2}>
      <AppBar color="primary" position="sticky" elevation={0}>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Results
        </ListItem>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);