import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetQuantity } from '../../store/actions/index';

import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia } from '@material-ui/core';

import ProductPageGallery from '../../components/ProductPageGallery/ProductPageGallery';
import ProductPageDetails from '../../components/ProductPageDettails/ProductPageDetails';
import ProductPageHeader from '../../components/ProductPageHeader/ProductPageHeader';

const ProductPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    products,
    shoppingCart: { isOpen, quantity }
  } = useSelector(state => state);
  const [index, setIndex] = useState(0);

  const { id } = useParams();
  const matchProduct = () => products.find(item => item.id === parseInt(id));

  const { name, description, images, price } = matchProduct();

  const handleActive = i => {
    const image = [
      classes.miniCard,
      index === i ? classes.miniCardactive : classes.miniCardinActive
    ];
    return image.join(' ');
  };

  const handleAddTocart = () =>
    dispatch(addToCart({ ...matchProduct(), isOpen }));

  const handleResetQuantity = () => dispatch(resetQuantity(quantity));
  return (
    <div className={classes.main}>
      <Grid
        className={classes.root}
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="strech"
      >
        <ProductPageHeader
          onHandleResetQuantity={handleResetQuantity}
          name={name}
          classes={classes}
        />
      </Grid>
      <Card className={classes.produtctCard}>
        <Grid className={classes.root} container spacing={3}>
          <ProductPageGallery
            onActive={handleActive}
            setIndex={setIndex}
            classes={classes}
            images={images}
          />
          <Grid item xs={5}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={images[index]}
                title="Nike Adversary"
              />
            </Card>
          </Grid>
          <Grid item xs={5}>
            <ProductPageDetails
              name={name}
              price={price}
              description={description}
              classes={classes}
              onAddToCart={handleAddTocart}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ProductPage;
