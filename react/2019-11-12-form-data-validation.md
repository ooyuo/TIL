# Form data validation

데이터를 입력하면 웹 응용 프로그램에서 데이터가 올바른 형식인지 확인한다. 정보의 형식이 올바르면 응용프로그램은 데이터를 서버에 제출하고 데이터베이스에 저장하도록한다. 정보의 형식이 올바르지 않으면 수정해야 할 사항을 설명하는 오류 메시지가 표시된다. 

 

유효성검사는 크게 세가지 이유로 쓰인다.

\- 올바른 형식으로 올바른 데이터를 얻고싶다.

\- 사용자의 계정을 보호하고자한다.

\- 자신을 보호하고자 한다.

 

 

다음은 validator의 type이 function인 경우만 input의 value를 업데이트해서 반환한다.

```javascript
const useInput = (initialValue, validator) => { 
  const [value, setValue] = useState(initialValue); // value에 초기값 Mr.를 넣어준다.
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") { // validator의 type이 function인 경우
      willUpdate = validator(value); // value를 업데이트한다.
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange }; 
};
```



