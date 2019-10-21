# useReducer를 사용해 상태 업데이트 로직 분리하기

## 1. useReducer란?

상태를 업데이트 할 때 useState를 사용해 설정해주었었는데, useState와 같이 상태를 업데이트 할때 useReducer라는 방법도 사용할 수도 있다.



useReducer 라는 Hook함수를 사용하게 되면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있고, 바깥에 작성도 가능하며, 다른 파일에 작성 후 불러와서 사용할 수도 있다.



### 1.1 reducer란?

reducer는 현재 상태와 액션 객체를 파라미터로 받아서 새로운 상태를 반환해주는 함수이다.

사용예시)

```javascript
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState; // 새로운 상태를 반환
}
```



### 1.2 액션이란?

액션은 기본적으로 객체 형태로 type속성을 이용해 작성된다.

```javascript
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
}
```

> type값을 대문자와 _로 구성하는게 일반관습
>
> 하지만 꼭 지키지 않아도 된다.



### 1.3 reducer 사용법

```javascript
const [state, dispatch] = useReducer(reducer, initialState); // reducer함수, 초기상태
```

- state: 컴포넌트에서 사용할 수 있는 상태
- dispatch: 액션을 발생시키는 함수



### 1.4 useState를 useReducer로

이전에 작성해놓았던 useState를 사용해 +, - 1씩 카운트 해주는 app이다.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```



이를 useReducer로 바꾸어 보자면...

```javascript
import React, { useReducer } from 'react';

function reducer(state, action) { 
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0); // reducer함수 실행, 초기값은 0.
   // 곧 number의 초기값이 0이 되고, state의 초기값도 0이 된다.

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' }); //액션을 발생시키는 함수의 type을 'INCREMENT'로 하겠다.
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' }); //액션을 발생시키는 함수의 type을 'DECREMENT'로 하겠다.
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```



> reducer는 현재상태, 액션값을 가지고 액션에 따라 값을 도출한다.
>
> 액션은 {type: 'INCREMENT'} 형식으로 준다.

