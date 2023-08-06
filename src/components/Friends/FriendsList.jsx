import React from 'react';
import propTypes from 'prop-types';
import { FriendsItem } from './FriendsItem';
import css from './Friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(user => {
        const { avatar, name, isOnline, id } = user;

        return (
          <FriendsItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendsList;
