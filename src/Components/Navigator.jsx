import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import clearSelection from '../actions/clearSelection';
import filterProviders from '../actions/filterProviders';

// styles used for the component
const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    '&:hover,&:focus': {
      cursor: 'pointer',
    }
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    }
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    '&:active': {
      backgroundColor: 'yellow'
    },
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: 'yellow',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: '0.85%',
  },
});

function Navigator(props) {
  const { classes, ...other } = props;
    const dispatch = useDispatch();
    const services = useSelector(state => state.services);

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          Control
        </ListItem>
        <ListItem
          style={{color: 'white', cursor: 'pointer'}}
          onClick={() => {
            dispatch(clearSelection());
            services.data.forEach((value) => {
              document.getElementById(value.id).style.color = 'black';
            });
          }}
        >
          Clear Selection
        </ListItem>
        <Divider className={classes.divider} />
        {/* renders the services only if they exist */}
        {services.length !== 0 ? services.data.map(({ id }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
                id={id}
                onClick={() => {
                  dispatch(filterProviders(id));
                  services.data.forEach((value) => {
                    if(value.id === id)
                      document.getElementById(value.id).style.color = 'yellow';
                    else
                      document.getElementById(value.id).style.color = 'black';
                  });
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            <Divider className={classes.divider} />
          </React.Fragment>
        )) : null }
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);