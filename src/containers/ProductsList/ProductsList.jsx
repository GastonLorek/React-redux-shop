import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import TransitionsModal from '../../components/Modal/Modal';
import ProductCard from '../../components/ProductCard/ProductCard';

import { fetchProducts } from '../../redux/actions/products';
const useStyles = makeStyles(() => ({
  girdContainer: {
    minHeight: 'calc(100vh - 96px)',
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

const useFetchProducts = action => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action);
  }, []);
};

const ProductsList = () => {
  const { products, isLoading } = useSelector(state => state.products);
  const history = useHistory();
  const classes = useStyles();

  const handleCardAction = id => history.push(`/product/${id}`);

  useFetchProducts(fetchProducts());

  const renderProducts = useMemo(
    () =>
      products?.map(product => {
        const { name, image, price, _id } = product;
        return (
          <ProductCard
            key={product.id}
            name={name}
            image={image}
            price={price}
            id={_id}
            onHandleCardAction={handleCardAction}
            classes={classes}
          />
        );
      }),
    [products]
  );

  return (
    <div className={classes.girdContainer}>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <Grid container item sm={12} spacing={2} className={classes.grid}>
          {renderProducts}
          <TransitionsModal />
        </Grid>
      )}
    </div>
  );
};

export default ProductsList;
