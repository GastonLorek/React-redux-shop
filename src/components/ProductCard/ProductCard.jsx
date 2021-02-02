import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const ProductCard = ({
  name,
  image,
  price,
  id,
  onHandleCardAction,
  classes
}) => (
  <Grid item xs={12} sm={4} lg={3} onClick={() => onHandleCardAction(id)}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Nike Adversary"
        />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography variant="p" display="block" component="strong">
          {name}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="strong">
          $ {price}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default ProductCard;

ProductCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  onHandleCardAction: PropTypes.func.isRequired,
  classes: PropTypes.object
};
