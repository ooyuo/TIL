import React, { useRef, useState } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@gmail.com",
    },
    {
      id: 3,
      username: "chole",
      email: "chole@gmail.com",
    },
  ]);

  // useRef는 특정dom을 선택하고 싶을때 쓸 수도있지만, 리랜더링이 되도 어떤 값을 기억하고싶을때 사용하기도함, useRef로 값이 바껴도 컴포넌트가 리랜더링 되지않음
  const nextId = useRef(4);

  // 불변성 지키면서 배열에 항목추가하기
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    // setUsers(users.concat(user)); -> 새로운 배열을 만들어서 그 뒤에 user를 붙여줌
    setInputs({
      username: "",
      email: "",
    });

    console.log(nextId.current); // 4
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
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
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
