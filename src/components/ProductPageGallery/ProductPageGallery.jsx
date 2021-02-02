import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { Card, CardMedia } from '@material-ui/core';

const ProductPageGallery = ({ onActive, setIndex, classes, images }) => (
  <Grid item xs={2}>
    {images?.map((image, idx) => (
      <Card
        className={onActive(idx)}
        key={idx}
        onMouseEnter={() => setIndex(idx)}
      >
        <CardMedia className={classes.miniMedia} image={image} />
      </Card>
    ))}
  </Grid>
);

export default ProductPageGallery;

ProductPageGallery.propTypes = {
  onActive: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
  classes: PropTypes.object,
  images: PropTypes.array
};
