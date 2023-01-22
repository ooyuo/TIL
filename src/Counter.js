import React, { useState } from "react";

function Counter() {
  /* 
  2. 배열비구조화할당, 구조분해
  - number: 현재상태
  - setNumber: 현재상태를 업데이트 하는 함수
  - 기본값: 0
  */
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // 3. 업데이트 함수(함수형 업데이트)로 업데이트 할수있음 => 성능 최적화와 관련있음
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    /*
    1. button onClick={onIncrease()} 로 작성하면 안됨. 랜더링 될때 바로 호출되기때문.
    */
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
