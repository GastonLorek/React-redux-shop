import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../../components/ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';
import TransitionsModal from '../../components/Modal/Modal';

const useStyles = makeStyles(() => ({
  girdContainer: {
    minHeight: 'calc(100vh - 64px)',
    maxWidth: '1332px',
    margin: '20px auto'
  },
  grid: {
    flexGrow: 1
  }
}));

const ProductsList = () => {
  const classes = useStyles();
  const { products } = useSelector(state => state);

  const renderProducts = () =>
    products.map(product => <ProductCard key={product.id} product={product} />);

  return (
    <div className={classes.girdContainer}>
      <Grid container item sm={12} spacing={2} className={classes.grid}>
        {renderProducts()}
        <TransitionsModal />
      </Grid>
    </div>
  );
};

export default ProductsList;
