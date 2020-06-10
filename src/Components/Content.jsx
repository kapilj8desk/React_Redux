import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { shallowEqual, useSelector, connect } from 'react-redux';

const styles = (theme) => ({
  paper: {
    maxWidth: '60%',
    margin: 'auto',
    overflow: 'hidden',
    marginTop: '1%',
    marginLeft: '30%'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
    marginTop: '2%'
  },
});

// returns mapped SubSpecialities
function returnSubSpecialities(data = []) {
  return(
    <React.Fragment>
      {data.length !== 0 ? 
        <Typography color="textSecondary" align="center">
          SubSpecialities: 
        </Typography> : null
      }
      {data.length !== 0 ? data.map((subspecialty) => (
        <Typography color="textSecondary" align="center">
          {subspecialty}
        </Typography>
      )) : null}
    </React.Fragment>
  );
}

// returns image data
function getImage(imageURL) {
  if (imageURL === null)
    return(null);
  else
    return(<img src={imageURL} alt="image" />);
}

// return provider content
function Content(props) {
  const { classes } = props;
  const providers = useSelector(state => state.filteredProviders, shallowEqual);

  return (
    <React.Fragment>
      {providers.length !== 0 ? providers.data.map(({ id, attributes }) => (
        <React.Fragment key={id}>
          <Paper className={classes.paper}>
            <div className={classes.contentWrapper}>
              <div style={{width: '25%', float:'left'}}>
                {getImage(attributes['profile-image'])}
              </div>
              <div style={{width: '65%', float:'left'}}>
                <Typography color="textSecondary" align="center">
                  Provider Name:  {attributes.name}
                </Typography>
                {returnSubSpecialities(attributes.subspecialties)}
              </div>
            </div>
          </Paper>
        </React.Fragment>
      )) : null}
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({filteredProviders: state.filteredProviders});


Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps)(Content));