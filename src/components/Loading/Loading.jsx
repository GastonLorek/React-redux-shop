import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  container: {
    height: 'calc(100vh - 96px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Dancing Script',
    '& h3': {
      fontSize: 70,
      fontWeigth: 600
    }
  },
  spinnerContainer: {
    position: 'relative'
  },
  spinnerTop: {
    color: grey[900],
    animationDuration: '450ms'
  },
  spinnerBottom: {
    color: green['A200'],
    position: 'absolute'
  }
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>Loading</h3>
      <br />
      <div className={classes.spinnerContainer}>
        <CircularProgress
          className={classes.spinnerBottom}
          variant="determinate"
          value={100}
          thickness={5}
        />
        <CircularProgress
          className={classes.spinnerTop}
          variant="indeterminate"
          disableShrink
          thickness={5}
        />
      </div>
    </div>
  );
};

export default Loading;
