import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

const Currency = ({ price }) => (
  <CurrencyFormat
    renderText={value => (
      <p>
        <strong>{value}</strong>
      </p>
    )}
    decimalScale={2}
    value={price}
    displayType={'text'}
    thousandSeparator={true}
    prefix={'$'}
  />
);

export default Currency;

Currency.propTypes = {
  price: PropTypes.number
};
