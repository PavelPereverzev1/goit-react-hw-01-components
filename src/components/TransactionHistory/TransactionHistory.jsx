import PropTypes from 'prop-types';
import { HistoryTable } from './TransactionHistory.styled';

const TransactionHistory = ({ props }) => {
  return (
    <HistoryTable className="transaction-history">
      <thead>
        <tr>
          <th className="type">Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className="type">{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </HistoryTable>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
