# React.memo를 사용한 컴포넌트 리렌더링 방지

React.memo의 사용으로 컴포넌트의 props가 바뀌지 않았다면 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화 해줄 수 있다.



사용방법은 간단하다.

```javascript
export default React.memo(CreateUser);
export default React.memo(UserList);
```

컴포넌트를 export시킬때 React.memo를 사용해서 감싸주기만 하면된다.



export 시키지않고 함수형태로 있다면

```javascript
const User = React.memo(function User( {user, onRemove, onToggle } ) {
   ...
});
```

간단하게 변수를 하나 만들어서 React.memo로 감싸진 코드를 대입해 주면된다.



하지만 이전에 작성했던 코드중 onCreate(),  onRemove(), onToggle()에서 users배열을 props에 넣어 사용했었다. 때문에 users의 내용이 바뀌게 되면 또 다시 userList전체가 리렌더링 되어버린다.



이를 방지하기 위해서 현재 useState로 관리하는 users를 참조하지않게 만들어야한다.

그러기위해 함수형 업데이트를 해줘야 하는데, 이는 setUsers에 등록하는 콜백함수의 파라미터에서 최신 users를 참조할 수 있기 때문에 deps에 users를 넣지 않아도 된다.



```javascript
const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  setUsers(users => ([...users, user])); // 함수형 업데이트를 사용. 파라미터에서 최신 users를 참조
}, [username, email]); // deps에 users 생략 가능


const onRemove = useCallback(id => {
  setUsers(users => (users.filter(user => user.id !== id))); 
}, []);

    
const onToggle = useCallback(id => {
  setUsers(users => (users.map(user =>
    user.id === id ? {...user, active: !user.active} : user
  )));
}, []);
```



onCreate(), onRemove(), onToggle() 모두 같은 방식으로 deps에서 users를 삭제하고 setUsers에 users 파라미터를 추가한다. 결과적으로 특정 항목을 수정하게 될 때, 해당 항목만 리렌더링 된다.



> 리액트 개발자 도구의 버그? CreateUser 즉 input 부분이 렌더링 되는것 처럼 보이나 실제로는 렌더링이 안되고있다.



useCallback, useMemo, React.memo는 컴포넌트의 성능을 실제로 개선할 수 있는 상황에서만 하자. 즉 남발하지 말자. 