import React from "react";
import './User.css';

function User({ user, onRemove, onToggle }) {
    return (
      <>
        <tr>
            <td style={{
                cursor : 'pointer',
                color : user.active ? 'orange' : 'black'
            }}
            onClick={() => onToggle(user.id)}
            >{user.username}</td>
            <td>{user.email}</td>
            <td><button onClick={() => onRemove(user.id)}>삭제</button></td>
        </tr>
      </>
    );
}
  
function UserList({ users, onRemove, onToggle }) {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
                ))}
            </tbody>
        </table>
        </>
    );
}

export default UserList;