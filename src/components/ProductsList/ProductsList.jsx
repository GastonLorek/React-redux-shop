import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from '../ProductCard/ProductCard';
import Grid from '@material-ui/core/Grid';
import './ProductsList.css';
import TransitionsModal from '../Modal/Modal';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  }
}));

const ProductsList = () => {
  const classes = useStyles();
  const { products } = useSelector(state => state);

  const renderProducts = () =>
    products.map(product => <ProductCard key={product.id} product={product} />);
  return (
    <div className="productlist">
      <div className={classes.root}>
        <Grid container item sm={12} spacing={2}>
          {renderProducts()}
          <TransitionsModal />
        </Grid>
      </div>
    </div>
  );
};

export default ProductsList;
