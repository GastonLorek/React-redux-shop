import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

const ShoppingCartHeader = ({ classes }) => (
  <AppBar position="relative" color="#fff" className={classes.appBar}>
    <Toolbar>
      <ShoppingCartSharpIcon className={classes.cartIcon} />
      <Typography variant="h6">Cart</Typography>
    </Toolbar>
  </AppBar>
);

export default ShoppingCartHeader;

ShoppingCartHeader.propTypes = {
  classes: PropTypes.object
};
