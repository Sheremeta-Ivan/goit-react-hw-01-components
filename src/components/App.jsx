import css from './App.module.css';
import { ProfileUser } from 'components/ProfileUser/ProfileUser';
import user from 'data/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'data/data.json';
import friends from 'data/friends.json';
import FriendsList from './Friends/FriendsList';
import transactions from 'data/transactions.json';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <div className={css.container}>
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
