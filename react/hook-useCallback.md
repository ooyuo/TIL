# useCallback을 사용해 함수 재사용하기

useCallback은 특정 결과값을 재사용할 때 사용했던 useMemo와 비슷한 Hook이다.

useCallback은 특정함수를 새로 만들지 않고 재사용하고 싶을때 사용한다.



함수들은 컴포넌트가 리렌더링될 때마다 새로 만들어진다. 함수를 선언하는 것 자체는 메모리, CPU리소스를 많이 차지하는 작업은 아니기때문에 함수를 새로 선언한다고 해서 그 자체만으로 큰 부하가 생기진 않지만, 한번 만든 함수를 필요할때만 새로 만들고 재사용하는 것이 중요하다.



1. useCallback을 import한다.

```javascript
import React, { useRef, useState, useMemo, useCallback } from 'react'; // 값을 자동 렌더링 
```



2. useMemo와 구조가 아예 같다. deps에는 이 함수안에서 사용한 컴포넌트명을 써주면 된다.

   onCreate(), onRemove(), onToggle() 에도 useCallback함수를 준다.

``` javascript
const onChange = useCallback( e => { // 변화가 일어나면(> 여기서는 버튼을 누르게 되면)
    const {name, value} = e.target; //e.target으로 해당 이벤트가 일어난 부분에서 name, value 추출
    setInputs({
      ...inputs,
      [name]: value
    }); //값세팅
  }, [inputs]);

const onCreate = useCallback(() => {
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
}, [username, email, users]);

const onRemove = useCallback(id => {
  setUsers(users.filter(user => user.id !== id)); //클릭된 id값 말고 나머지 살린다.
}, [users]);

const onToggle = useCallback(id => {
  setUsers(users.map(user =>
    user.id === id ? {...user, active: !user.active} : user
  ));
}, [users]);
```
