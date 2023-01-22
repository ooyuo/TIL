import React from "react";

function User({ user, onRemove }) {
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      {/* id값을 파라미터로 넣어서 호출할땐 아래와 같이 이벤트를 호출해야함, onRemove(id)로 작성하면안됨, 랜더링 되자마자 호출되어버림 */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}
function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
