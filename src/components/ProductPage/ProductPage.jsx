import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetQuantity } from '../../store/actions/index';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import {
  Button,
  Card,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Currency from '../Currency/Currency';
import Quantity from '../Quantity/Quantity';

const ProductPage = () => {
  const [index, setIndex] = useState(0);
  const {
    products,
    shoppingCart: { isOpen, quantity }
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();
  const matchProduct = () => products.find(item => item.id === parseInt(id));

  const { name, description, images, price } = matchProduct();

  const active = i => {
    const image = [
      classes.miniCard,
      index === i ? classes.miniCardactive : classes.miniCardinActive
    ];
    return image.join(' ');
  };
  return (
    <div
      style={{
        height: 'calc(100vh - 89px)',
        maxWidth: '1332px',
        margin: ' 20px auto'
      }}
    >
      <Grid
        className={classes.root}
        container
        spacing={4}
        direction="column"
        justify="center"
        alignItems="strech"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          item
          xs={12}
          spacing={3}
        >
          <Typography
            variant="h3"
            gutterBottom={true}
            className={classes.title}
          >
            {name.toLowerCase()}
          </Typography>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              to="/"
              onClick={() => dispatch(resetQuantity(quantity))}
              className={classes.link}
            >
              {/* <CloseIcon fontSize="large" /> */}
              <p>Shop</p>
            </Link>

            {/* <CloseIcon fontSize="large" /> */}
            <p>{name}</p>
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Card className={classes.produtctCard}>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={2}>
            {images.map((image, idx) => (
              <Card
                className={active(idx)}
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
              <ListItem disableGutters>
                <Typography
                  component="strong"
                  variant="h6"
                  className={classes.price}
                >
                  <Currency price={price} />
                </Typography>
                <Quantity />
              </ListItem>
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
