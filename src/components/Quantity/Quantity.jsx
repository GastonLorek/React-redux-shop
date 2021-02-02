import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleQuantity } from '../../redux/actions/index';
import { IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles({
  root: {
    marginRight: 10,
    display: 'flex',
    flexGrow: 0.5
  },
  counter: {
    padding: 12
  },
  button: {
    color: grey[900],
    background: green['A200'],
    borderRadius: 30
  }
});

const Quantity = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { quantity } = useSelector(state => state.shoppingCart);

  return (
    <div className={classes.root}>
      <IconButton
        onClick={quantity === 1 ? null : () => dispatch(handleQuantity('-'))}
      >
        <RemoveCircleIcon className={classes.button} />
      </IconButton>
      <Typography variant="body1" className={classes.counter}>
        {quantity}
      </Typography>
      <IconButton onClick={() => dispatch(handleQuantity('+'))}>
        <AddCircleIcon className={classes.button} />
      </IconButton>
    </div>
  );
};

export default Quantity;
