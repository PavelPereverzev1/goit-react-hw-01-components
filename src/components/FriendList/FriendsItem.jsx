import PropTypes from 'prop-types';

const FriendsItem = ({ name, avatar, isOnline }) => {
  return (
    <li className="item">
      <span className={isOnline ? 'isOnline' : 'isOfline'}></span>
      <div className="thumb">
        <img className="avatar" src={avatar} alt="User avatar" />
      </div>
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
