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
  button: {
    height: 40,
    background: grey[900],
    color: green['A200'],
    borderRadius: 0,
    textTransform: 'capitalize',
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
    display: 'flex'
  },
  appBar: {
    // height: 60,
    border: 'none',
    color: green['A200'],
    background: grey[900]
  },
  cartIcon: {
    color: green['A200'],
    marginRight: 10
  }
});
