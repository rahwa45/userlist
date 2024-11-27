import React, { useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Henos', age: 21 },
    { id: 2, name: 'Hiwot', age: 22 },
    { id: 3, name: 'Noah', age: 25 },
  ]);

  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditName(user.name);
    setEditAge(user.age);
  };

  const handleSaveClick = () => {
    setUsers(users.map(user =>
      user.id === editUserId ? { ...user, name: editName, age: editAge } : user
    ));
    setEditUserId(null);
    setEditName('');
    setEditAge('');
  };

  return (
    <div className='container'>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {editUserId === user.id ? (
              <div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="number"
                  value={editAge}
                  onChange={(e) => setEditAge(e.target.value)}
                />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div className='result'>
                <span>{user.name} </span>
                <span>Age: {user.age}</span> 
                <button onClick={() => handleEditClick(user)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;