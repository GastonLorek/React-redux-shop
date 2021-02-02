import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Typography } from '@material-ui/core';

import Currency from '../../components/Currency/Currency';

const ShoppingCartProduct = ({ product, removeItem, classes }) => (
  <div>
    <ListItem className={classes.listItem}>
      <Avatar
        className={classes.avatar}
        src={product.image}
        variant="square"
      ></Avatar>
      <ListItemText
        primary={
          <>
            <Typography variant="h5">{product.name}</Typography>
          </>
        }
        secondary={
          <>
            <Typography
              component="strong"
              variant="body1"
              className={classes.inline}
            >
              <Currency price={product.price} />
              <strong style={{ marginLeft: '3px', marginRight: '3px' }}>
                x
              </strong>
              <strong>{product.quantity}</strong>
            </Typography>
          </>
        }
      />
      <IconButton aria-label="delete" onClick={() => removeItem(product)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ListItem>
    <Divider variant="middle" />
  </div>
);

export default ShoppingCartProduct;

ShoppingCartProduct.propTypes = {
  product: PropTypes.object,
  removeItem: PropTypes.func,
  classes: PropTypes.object
};
