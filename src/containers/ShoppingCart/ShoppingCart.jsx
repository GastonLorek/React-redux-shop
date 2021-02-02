import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotalAmount } from '../../store/reducers/shoppingCart';
import { removeFromCart, toogleCart } from '../../store/actions/index';

import { useStyles } from './style';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

import ShoppingCartHeader from '../../components/ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartProduct from '../../components/ShoppingCartProduct/ShoppingCartProduct';
import ShoppingCartFooter from '../../components/ShoppingCartFooter/ShoppingCartFooter';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const { isOpen, shoppingCart } = useSelector(state => state.shoppingCart);

  const removeItem = product => dispatch(removeFromCart(product));

  const renderProducts = () =>
    shoppingCart.map((product, idx) => (
      <ShoppingCartProduct
        key={idx}
        product={product}
        removeItem={removeItem}
        classes={classes}
      />
    ));

  const handleContinueShopping = () => {
    history.push('/');
    dispatch(toogleCart({ isOpen }));
  };
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => dispatch(toogleCart({ isOpen }))}
    >
      <ShoppingCartHeader classes={classes} />
      {shoppingCart.length === 0 ? (
        <Typography variant="h5">Your Shopping Cart is Empty</Typography>
      ) : (
        <>
          <div className={classes.list} role="presentation">
            <List>{renderProducts()}</List>
          </div>
          <div className={classes.shoppingCartFooter}>
            <ShoppingCartFooter
              onContinueShopping={handleContinueShopping}
              classes={classes}
              total={getCartTotalAmount(shoppingCart)}
            />
          </div>
        </>
      )}
    </Drawer>
  );
};

export default ShoppingCart;
