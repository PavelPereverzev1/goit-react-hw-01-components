import FriendsItem from './FriendsItem';
import { Container } from './FriendsList.styled';

const FriendList = ({ items }) => {
  return (
    <Container className="friend-list">
      {items.map(item => {
        return <FriendsItem key={item.id} {...item} />;
      })}
    </Container>
  );
};

export default FriendList;
