import React from 'react';
import { useSelector } from 'react-redux';
import { getUserById } from '../../store/user/userActions';

const User = () => {
  const { isLoading, error, user } = useSelector(({ users }) => users);
  return (
    <div>
      <button
        onClick={() => {
          getUserById(1);
          console.log('dfg')
        }}
      >
        Get user
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user?.name ? (
        <h1>User: {user.name}</h1>
      ) : (
        <h1>User not found</h1>
      )}
    </div>
  );
};

export default User;
