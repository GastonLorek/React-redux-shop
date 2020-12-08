import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { grey, green } from '@material-ui/core/colors';
import { Avatar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import imagen from '../../images/Busenitz_Vulc_II_Shoes_Black_EF8472_01_standard.jpg';

const useStyles = makeStyles({
  list: {
    width: 500
  },
  listItem: {
    flex: 1
  },
  fullList: {
    width: 'auto'
  },
  button: {
    background: grey[900],
    color: green['A200']
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: '10px'
  },
  inline: {
    display: 'inline'
  }
});
const ShoppingCart = ({ isOpen, handleShoppingCart }) => {
  const classes = useStyles();

  const list = () => (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem className={classes.listItem}>
          <Avatar
            className={classes.avatar}
            src={imagen}
            variant="square"
          ></Avatar>
          <ListItemText
            primary={
              <>
                <Typography variant="h5">{'Nike Sb'}</Typography>
              </>
            }
            secondary={
              <>
                <Typography
                  component="strong"
                  variant="body1"
                  className={classes.inline}
                >
                  {'$ 7000'}
                </Typography>
              </>
            }
          />
          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
  return (
    <Drawer anchor="right" open={isOpen} onClose={handleShoppingCart}>
      {list()}
      <Button className={classes.button}>Buy</Button>
    </Drawer>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
  handleShoppingCart: PropTypes.func
};
