import Profile from './Profile/Profille';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={statistics} />
      <FriendList items={friends} />
      <TransactionHistory props={transactions} />
    </>
  );
};
