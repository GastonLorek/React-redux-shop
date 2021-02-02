import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { grey } from '@material-ui/core/colors';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: grey[900],
    color: '#ffff',
    border: '2px solid #ffff',
    padding: 20,
    '& :p': {
      margin: 10
    }
  }
});

const TransitionsModal = () => {
  const dispatch = useDispatch();
  const { isOpen, payment } = useSelector(state => state.modal);
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={() => dispatch({ type: 'TOOGLE_MODAL' })}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Payment Succeeded!</h2>
            <p id="transition-modal-description">
              Client: {payment?.address.recipient_name}
            </p>
            <h3>Shipping Adress</h3>
            <p id="transition-modal-description">
              City: {payment?.address.city}
            </p>
            <p id="transition-modal-description">
              address: {payment?.address.line1}
            </p>
            <p id="transition-modal-description">
              Postal Code: {payment?.address.postal_code}
            </p>
            <h3>Payment details</h3>
            <p id="transition-modal-description">
              Payment ID: {payment?.paymentID}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
