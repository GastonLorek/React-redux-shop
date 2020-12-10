import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/index';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import {
  Button,
  Card,
  CardMedia,
  Divider,
  List,
  ListItemText,
  Typography
} from '@material-ui/core';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';

const ProductPage = () => {
  const [index, setIndex] = useState(0);
  const {
    products,
    shoppingCart: { isOpen }
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();
  const matchProduct = () => products.find(item => item.id === parseInt(id));

  const { name, description, images, price } = matchProduct();
  return (
    <div
      style={{ minHeight: '92vh', maxWidth: '1332px', margin: ' 20px auto' }}
    >
      <Grid
        className={classes.root}
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="strech"
      >
        <Grid container item xs={6}>
          <h1>hi</h1>
        </Grid>
      </Grid>
      <Card className={classes.produtctCard}>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={2}>
            {images.map((image, idx) => (
              <Card
                className={classes.miniCard}
                key={idx}
                onMouseEnter={() => setIndex(idx)}
              >
                <CardMedia className={classes.miniMedia} image={image} />
              </Card>
            ))}
          </Grid>
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
            <List>
              <ListItemText
                primary={
                  <>
                    <Typography variant="h4" gutterBottom>
                      {name}
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="strong"
                      variant="h6"
                      className={classes.inline}
                      gutterBottom
                      paragraph
                    >
                      $ {price}
                    </Typography>
                  </>
                }
              />
              <Divider />
              <ListItemText
                className={classes.description}
                primary={
                  <>
                    <Typography variant="body1">{description}</Typography>
                  </>
                }
              />

              <Divider />
              <Button
                className={classes.button}
                size="large"
                startIcon={<AddShoppingCartTwoToneIcon />}
                onClick={() =>
                  dispatch(addToCart({ ...matchProduct(), isOpen }))
                }
              >
                Add To Cart
              </Button>
            </List>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ProductPage;
