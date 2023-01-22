import React, { useState, useRef } from "react";

function InputSample() {
  // 1. 한개의 Input 관리하기
  const [text, setText] = useState("");
  const onChange = (e) => {
    /*
    - e.target : 인풋dom을 가리킴
    - e.target.value: 인풋dom의 값
    */
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };

  // 2. 여러개의 Input 관리하기
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  // 특정 dom 선택하기, ex) 초기화버튼을 눌렀을때 커서를 name 인풋에 가도록 하기
  const nameInput = useRef();
  const { name, nickname } = inputs;
  const onChangeMultiple = (e) => {
    /* 
    - React에서 객체를 업데이트할때는 객체를 먼저 복사해야함
    -> 불변성을 지켜줘야만 리액트에서 상태가 업데이트된걸 감지할 수 있고, 랜더링이 됨
    */
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value, //[name] : name이 될수도 nickname이 될수도있음
    });
  };
  const onResetMultiple = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      {
        // 1. 한개의 Input 관리하기
        /* 초기화 버튼을 눌렀을때 초기화되게 하려면 value={text} */
      }

      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 :</b>
        {text}
      </div>
      <br />
      {/*
      // 2. 여러개의 Input 관리하기
      */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChangeMultiple}
        value={name}
        // dom에 직접 접근하게하기
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChangeMultiple}
        value={nickname}
      />
      <button onClick={onResetMultiple}>초기화</button>
      <div>
        <b>값 :</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
