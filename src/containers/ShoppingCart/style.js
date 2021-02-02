import { makeStyles } from '@material-ui/core/styles';
import { grey, green } from '@material-ui/core/colors';

export const useStyles = makeStyles({
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
  shoppingCartFooter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    width: 350,
    height: 40,
    background: grey[900],
    color: green['A200'],
    borderRadius: 0,
    textTransform: 'capitalize',
    marginBottom: 20,
    '&:hover': {
      background: green['A200'],
      color: grey[900]
    }
  },
  total: {
    width: 350,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: '10px'
  },
  inline: {
    display: 'flex'
  },
  appBar: {
    width: 500,
    border: 'none',
    color: green['A200'],
    background: grey[900]
  },
  cartIcon: {
    color: green['A200'],
    marginRight: 10
  }
});
