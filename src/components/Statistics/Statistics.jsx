import PropTypes from 'prop-types';
import { Container, StatItem } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container className="statistics">
      {title ? <h2 className="title">{title}</h2> : false}
      <ul className="stats-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem className="item" key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatItem>
          );
        })}
      </ul>
    </Container>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
