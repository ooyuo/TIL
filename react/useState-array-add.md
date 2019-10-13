배열에 항목 추가하기
=============  
  
여러개의 input이 있고 버튼이벤트가 발생하면 아래 추가된 리스트를 보여준다.  
  
## 생각하기  
1. 두 개의 input을 활용할 것이다. input 두개에 각각 컴포넌트들을 추가한 뒤 각각 초기화한다.  
3. input의 name을 활용해 input에서 username, email 값을 추출한다.  
4. onChage()에서 할 일: 이벤트가 발생된 input에서 name과 value를 각각 가져와 기존 input에 추가한다.  
5. onCreate()에서 할 일: 기존 users에 새로 추가된 user정보를 넣고 input의 value는 깔끔하게 초기화한다. + id값 1씩 올려주기  
6. CreateUser와 UserList return한다.  




  
  
CreateUser컴포넌트에 필요한 props를 준비한다.  
```javascript
import React from 'react';

// input에서 뭘 쓸 것인가 고민하고 입력
// input, button안에 들어가는 요소들은 다 들어간다고 보면됨
function CreateUser({ username, email, onChange, onCreate}) {
    return (
        <div>
            <input 
                name="username"
                placeholder="이름"
                onChange={onChange}
                value={username}
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;
```

```javascript
import React, { useRef, useState } from 'react'; // 값을 자동 렌더링 시켜주는 useRef, 파라미터 사용? useState
import UserList from './UserList.js';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  }); // input값을 먼저 초기화 한다. 
  const {username, email} = inputs; //두개의 input에 값을 저장한다.
  const onChange = e => { // 변화가 일어나면(> 여기서는 버튼을 누르게 되면)
    const {name, value} = e.target; //e.target으로 해당 이벤트가 일어난 부분에서 name, value 추출
    setInputs({
      ...inputs,
      [name]: value
    }); //값세팅
  };
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'doyoun',
        email: 'doyoun525@naver.com'
    },
    {
        id: 2,
        username: 'woohuck',
        email: 'woo@naver.com'
    },
    {
        id: 3,
        username: 'ddoddo',
        email: 'ddoddo@naver.com'
    }
]); //users도 useState를 사용해 컴포넌트의 상태로서 관리해주기

// UseRef()를 사용시 파라미터를 넣어주면, 이 값이 .current값의 기본값이 된다. 
// 그리고 이 값을 수정할 때에는 .current값을 수정하면되고 조회할때에도 .current를 조회하면 된다.
const nextId = useRef(4); 
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  }; //새 객체를 만든다. 저장할 수 있는
  setUsers([...users, user]); //spread로 배열 복사 한다음 그 뒤에 새로 추가된 user 보여주기
  
  setInputs({
    username: '',
    email: ''
  }); //끝났으니 input 초기화해서 깨끗하게.
  nextId.current += 1; //아이디값은 1씩 자동으로 올려주기
};
  return (
    <>
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <UserList users={users} />
    </>
  );
}

export default App;
```
  

배열에 변화를 줄 때는 객체와 마찬가지로 불변성을 지켜주어야 한다.  
push, splice, sort 등은 불변성을 지켜주지 않기 때문에 사용하지 않고      
기존의 배열을 ...로 복사하고 사용한다.  


## 핵심
배열에 새 항목을 추가할 때  
1. spread(...)연산자 사용하기  
<pre><code>setInputs({
      ...inputs,
      [name]: value
    });</code></pre>  
  
2. concat 사용하기  
<pre><code>setUsers(users.concat(user));</code></pre>  
