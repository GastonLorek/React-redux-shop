import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import TransitionsModal from '../../components/Modal/Modal';
import ProductCard from '../../components/ProductCard/ProductCard';

const useStyles = makeStyles(() => ({
  girdContainer: {
    minHeight: 'calc(100vh - 64px)',
    maxWidth: '1332px',
    margin: '20px auto'
  },
  grid: {
    flexGrow: 1
  },
  card: {
    maxWidth: 300
  },
  media: {
    height: 170,
    objectFit: 'contain'
  },
  content: {
    height: 20,
    padding: 5
  }
}));

const ProductsList = () => {
  const { products } = useSelector(state => state);
  const history = useHistory();
  const classes = useStyles();

  const handleCardAction = id => history.push(`/product/${id}`);

  const renderProducts = useMemo(
    () =>
      products.map(product => {
        const { name, image, price, id } = product;
        return (
          <ProductCard
            key={product.id}
            name={name}
            image={image}
            price={price}
            id={id}
            onHandleCardAction={handleCardAction}
            classes={classes}
          />
        );
      }),
    [products]
  );

  return (
    <div className={classes.girdContainer}>
      <Grid container item sm={12} spacing={2} className={classes.grid}>
        {renderProducts}
        <TransitionsModal />
      </Grid>
    </div>
  );
};

export default ProductsList;
