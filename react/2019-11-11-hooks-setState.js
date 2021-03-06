import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  //const item = useState(1)[0];
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

/*
Hook을 class Component를 사용한 코드로 수정했을때
*/
// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.decrementItem}>decrement</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
//ReactDOM.render(<AppUgly />, rootElement);
