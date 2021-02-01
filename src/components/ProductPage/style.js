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
  miniCardactive: {
    border: `1px solid ${grey[900]}`
  },
  miniCardinActive: {
    border: 'none'
  },
  miniMedia: {
    height: 108.5,
    objectFit: 'contain',
    cursor: 'pointer'
  },
  button: {
    color: green['A200'],
    background: grey[900],
    textTransform: 'capitalize',
    marginTop: 20,
    '&:hover': {
      color: grey[900],
      background: green['A200']
    }
  },
  description: {
    marginTop: 20,
    marginBottom: 20
  },
  price: {
    flexGrow: 0.5
  },
  title: {
    textTransform: 'capitalize'
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(117 117 117)',
    '& :hover': { textDecoration: 'underline' }
  }
});
