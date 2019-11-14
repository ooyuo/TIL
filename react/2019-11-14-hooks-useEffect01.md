#### 목표: 로딩되고 일정시간이 지나면 title 값을 바꾼다.



useTitle에서 할 일
 \- title을 변경하기 위해 useState 사용한다.
 \- title 변경해주는 updateTitle() 함수를 만든다.
 \- useEffect를 사용해 updateTitle함수를 title이 변경될때마다 호출되게 한다.
 \- 변경된 값을 return한다.



```javascript
// 본 코드는 Nomad Coders에서 공부한 내용이다.
const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  // useTitle()에 초기값을 할당하여 호출한다.
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 5000);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

