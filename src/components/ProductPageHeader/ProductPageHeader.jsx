import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ProductPageHeader = ({ onHandleResetQuantity, name, classes }) => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
    item
    xs={12}
    spacing={3}
  >
    <Typography variant="h3" gutterBottom={true} className={classes.title}>
      {name.toLowerCase()}
    </Typography>
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link
        to="/"
        onClick={() => onHandleResetQuantity()}
        className={classes.link}
      >
        <p>Shop</p>
      </Link>

      <p>{name}</p>
    </Breadcrumbs>
  </Grid>
);

export default ProductPageHeader;

ProductPageHeader.propTypes = {
  onHandleResetQuantity: PropTypes.func,
  name: PropTypes.string,
  classes: PropTypes.object
};
