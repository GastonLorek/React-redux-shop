import { makeStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

export const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 500
  },
  produtctCard: {
    padding: 20,
    marginTop: 20
  },
  media: {
    height: 464,
    objectFit: 'contain'
  },
  miniCard: {
    flexGrow: 1,
    maxWidth: 110,
    marginBottom: 10
  },
  miniMedia: {
    height: 108.5,
    objectFit: 'contain',
    cursor: 'pointer'
  },
  button: {
    color: green['A200'],
    background: grey[900],
    marginBottom: 20,
    marginTop: 20,
    '&:hover': {
      color: grey[900],
      background: green['A200']
    }
  },
  description: {
    marginTop: 20,
    marginBottom: 20
  }
});
