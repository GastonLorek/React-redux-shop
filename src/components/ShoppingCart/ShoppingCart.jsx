import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleCart } from '../../store/actions/index';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { grey, green } from '@material-ui/core/colors';
import { AppBar, Avatar, Paper, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  list: {
    width: 500,
    flexGrow: 1
  },
  listItem: {
    flex: 1
  },
  fullList: {
    width: 'auto'
  },
  button: {
    height: 40,
    background: grey[900],
    color: green['A200'],
    borderRadius: 0,
    '&:hover': {
      background: green['A200'],
      color: grey[900]
    }
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: '10px'
  },
  inline: {
    display: 'inline'
  },
  appBar: {
    height: 60,
    border: 'none'
  },
  cartIcon: {
    color: green['A200'],
    marginRight: 10
  }
});
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
                  {product.price}
                </Typography>
              </>
            }
          />
          <IconButton aria-label="delete">
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
        Buy
      </Button>
    </Drawer>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
  handleShoppingCart: PropTypes.func
};
