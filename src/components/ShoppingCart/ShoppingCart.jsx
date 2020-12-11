import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleCart, removeFromCart } from '../../store/actions/index';
import { getCartTotalAmount } from '../../store/reducers/shoppingCart';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './style';
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Currency from '../Currency/Currency';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { isOpen, shoppingCart } = useSelector(state => state.shoppingCart);
  const classes = useStyles();
  const renderProduct = () =>
    shoppingCart.map((product, idx) => (
      <>
        <ListItem className={classes.listItem} key={idx}>
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
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </ListItem>
        <Divider variant="middle" />
      </>
    ));
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => dispatch(toogleCart({ isOpen }))}
    >
      <div className={classes.list} role="presentation">
        <AppBar position="relative" color="#fff" className={classes.appBar}>
          <Toolbar>
            <ShoppingCartSharpIcon className={classes.cartIcon} />
            <Typography variant="h6">Cart</Typography>
          </Toolbar>
        </AppBar>
        <List>
          {shoppingCart.length === 0 ? (
            <ListItemText
              primary={
                <>
                  <Typography variant="h5">
                    {'Your Shopping Cart is Empty'}
                  </Typography>
                </>
              }
            />
          ) : (
            renderProduct()
          )}
        </List>
      </div>
      <Button className={classes.button} variant="contained">
        <strong>Checkout</strong>{' '}
        <Currency price={getCartTotalAmount(shoppingCart)} />
      </Button>
    </Drawer>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
  handleShoppingCart: PropTypes.func
};
