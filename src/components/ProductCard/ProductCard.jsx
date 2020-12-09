import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 150,
    objectFit: 'contain'
  }
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const history = useHistory();
  const { name, image, price, category, id } = product;
  return (
    <>
      {!product ? (
        <CircularProgress />
      ) : (
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          onClick={() => history.push(`/product/${id}`)}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title="Nike Adversary"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  color="textSecondary"
                  component="strong"
                >
                  $ {price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {category}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
};
