import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Currency from '../Currency/Currency';
import PaypalBUtton from '../../containers/PaypalButton/PaypalButton';

const ShoppingCartFooter = ({ onContinueShopping, classes, total }) => (
  <>
    <div className={classes.total}>
      <Typography variant="h5">Total:</Typography>
      <Currency price={total} />
    </div>
    <Button
      className={classes.button}
      variant="contained"
      onClick={() => onContinueShopping()}
    >
      <strong>Continue Shopping</strong>
    </Button>
    <PaypalBUtton total={total} />
  </>
);

export default ShoppingCartFooter;

ShoppingCartFooter.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
  classes: PropTypes.object,
  total: PropTypes.func
};
