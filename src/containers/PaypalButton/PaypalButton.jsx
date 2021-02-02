/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toogleModal } from '../../redux/actions/modal';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const PaypalButton = ({ total }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSuccess = payment => {
    console.log('The payment was succeeded!', payment);
    dispatch({ type: 'CLEAR_CART' });
    dispatch(toogleModal(payment));
    history.push('/');
  };

  const onCancel = data => {
    console.log('The payment was cancelled!', data);
  };

  const onError = err => {
    console.log('Error!', err);
  };

  let env = 'sandbox';
  let currency = 'USD';

  const client = {
    sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID,
    production: 'YOUR-PRODUCTION-APP-ID'
  };

  return (
    <PaypalExpressBtn
      style={{ size: 'large', shape: 'rect' }}
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
};

export default PaypalButton;

PaypalButton.propTypes = {
  total: PropTypes.func
};
