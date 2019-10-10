여러개의 input 상태 관리하기
=============  
  
  
  
~~~.javascript
import React from 'react';

// input에서 뭘 쓸 것인가 고민하고 입력 ,
// input, button안에 들어가는 속성들은 다 들어간다고 보면됨
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
~~~