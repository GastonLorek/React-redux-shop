import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';

import Quantity from '../Quantity/Quantity';
import Currency from '../Currency/Currency';

const ProductPageDetails = ({
  name,
  price,
  description,
  classes,
  onAddToCart
}) => (
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
      <Typography component="strong" variant="h6" className={classes.price}>
        <Currency price={price} />
      </Typography>
      <Quantity />
    </ListItem>
    <Divider />
    <Button
      className={classes.button}
      size="large"
      startIcon={<AddShoppingCartTwoToneIcon />}
      onClick={() => onAddToCart()}
    >
      Add To Cart
    </Button>
  </List>
);

export default ProductPageDetails;

ProductPageDetails.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  classes: PropTypes.object,
  onAddToCart: PropTypes.func
};
