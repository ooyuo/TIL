# setState - Hooks

Hook은 React 버전 16.8에 새로 추가되었다. Hook을 이용해 class를 작성할 필요없이 상태 값과 여러 React의 기능을 사용할 수 있다. 

   

  

####  **1. State Hook**

```javascript
import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(1);
  const icrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={icrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};
```

`useState`는 현재의 state값과 이 값을 업데이트하는 함수를 쌍으로 제공한다. 그리고 이 함수를 이벤트 핸들러나 다른 곳에서 호출할 수 있다. 인자로 초기 state 값을 받고, `this.state`와 달리 `setSate`의 state는 개체일 필요가 없다. 

이 초기값은 첫번째 랜더링에만 한번 사용된다.

​     

  

  

#### **2. Class**

```javascript
class AppUgly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      };
    });
  };
}
```

같은 결과를 가지는 것을 class Component를 사용하여 작성한 코드이다.  

class Component를 사용하여 state를 변경해 줄때는 1. state는 객체형태여야하고, 2. this가 필요하고, 3. `setState`를 할때 이전 state가 필요하고, 3. Hook `setState`를 사용할때와 달리 코드길이가 길어진다.