import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';

const Currency = ({ price }) => {
  return (
    <div>
      <CurrencyFormat
        renderText={value => (
          <strong>
            <p>
              <strong>{value}</strong>
            </p>
          </strong>
        )}
        decimalScale={2}
        value={price}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
};

export default Currency;

Currency.propTypes = {
  price: PropTypes.number
};
