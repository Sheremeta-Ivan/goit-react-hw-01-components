import propTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transactionType}>{type[0] + type.slice(1)}</td>
            <td className={css.transactionAmount}>{amount}</td>
            <td className={css.transactionCurrency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
