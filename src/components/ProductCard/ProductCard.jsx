import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '400px',
    maxWidth: '300px',
    margin: '10px'
  }
});

const ProductCard = () => {
  const classes = useStyles();
  return <Card className={classes.card}>Hello</Card>;
};

export default ProductCard;
