# useState - Hook (2)

useState의 활용으로 버튼이 2개가 있을경우 각 버튼을 클릭할때마다 밑에 content를 달리한다.

  

  


 ```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
// ## button의 index값을 바꿔서 content의 내용을 달리 한다.

//1. content정의
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

/*
3. 바꿔줄 컴포넌트를 useState로 정의, 여기선 버튼의 index를 바꿔준다
App()에서 쓰일 currentItem, changeItem을 return한다. 
*/
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, seturrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: seturrentIndex
  };
};

/*
2. App()에 있어야할것.
 - 화면에 뿌려줄 컴포넌트
 - return 안에 JSX
*/
function App() {
  // useTabs함수 호출. 사용할 컴포넌트를 정의
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((btn, index) => (
        <button onClick={() => changeItem(index)}>{btn.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 ```

