import React, { useRef, useState, useMemo, useCallback } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    // useCallback: 함수 재사용
    // inputs가 바뀔 때만 함수가 실행되고 그렇지 않으면 함수를 재사용함
    // 눈에 띄는 성능 최적화는 없음,, 컴포넌트를 최적화해야 눈에 띄게 성능이 최적화됨
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "chole",
      email: "chole@gmail.com",
      active: false,
    },
  ]);

  // useRef는 특정dom을 선택하고 싶을때 쓸 수도있지만, 리랜더링이 되도 어떤 값을 기억하고싶을때 사용하기도함, useRef로 값이 바껴도 컴포넌트가 리랜더링 되지않음
  const nextId = useRef(4);

  // 불변성 지키면서 배열에 항목추가하기
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // 함수형으로 useState를 사용하면, deps에 디펜던시를 넣지않아도됨 -> 리랜더링 방지
    setUsers((users) => [...users, user]);
    // setUsers(users.concat(user)); -> 새로운 배열을 만들어서 그 뒤에 user를 붙여줌
    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current); // 4
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);
  // 배열에 항목 수정하기
  /*
  1. App.js에서 함수 작성하기
  2. UserList 컴포넌트에 함수 전달하기
  3. UserList 컴포넌트에서 함수를 받아서 User 컴포넌트에 함수 전달하기
  4. User 컴포넌트에서 함수를 받아서 사용하기
  */
  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  }, []);

  // useMemo: 값을 재사용
  // users가 바뀔때만 호출되고 그게 아니면 이전 값을 재사용함
  // useMemo로 감싸주지 않을 경우 input의 값이 change 될때마다 활성사용자수 함수도 게속 랜더링됨 -> useMemo로 감싸주어서 컴포넌트 성능 최적화용
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <div>
        <h1>1. Wrapper Component의 사용 예</h1>
      </div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true} />
        <Hello color="pink" />
      </Wrapper>
      <hr style={{ border: "1px solid black", padding: "30px" }} />
      <h1>2. 카운터</h1>
      <Counter />
      <hr style={{ border: "1px solid black", padding: "30px" }} />
      <h1>3. Input sample</h1>
      <InputSample />
      <hr style={{ border: "1px solid black", padding: "30px" }} />
      <h1>4. 배열 랜더링하기, 배열에 항목추가 or 제거하기</h1>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
