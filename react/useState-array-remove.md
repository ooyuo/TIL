배열에 항목 제거하기
=============  
  
배열에서 삭제이벤트가 일어날 때 해당 항목을 삭제한다.  
  
  
  
## 설계순서  
1. 삭제 버튼이 필요하다. => 삭제 버튼 렌더링하기  
2. filter() 사용해서 클릭된 id값의 항목을 제외한 모두를 남긴다.  
  
  
```javascript
import React from 'react';

function User( {user, onRemove } ) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button> 
            {/* user.id값으로 삭제한다. */}
        </div>
    );
}

function UserList({ users,onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} />
                // User 컴포넌트에 onRemove() 주기
            ))}
        </div>
    );
}

export default UserList;
```
  
  
```javascript
const onRemove = id => {
  setUsers(users.filter(user => user.id !== id)); //클릭된 id값 말고 나머지 살린다.
};
```
  
  
## 핵심
> 배열 목록에서 항목을 삭제할 때는 아이디 값을 이용하고, 불변성을 지키는 filter() 함수를 사용해 id값이 일치하는 항목을 제외한 모든 항목을 남기는 것이 좋다.
