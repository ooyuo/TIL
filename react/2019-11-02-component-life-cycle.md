# Component life cycle  
모든 컴포넌트는 여러 종류의 '생명주기 메서드'를 가지며 이 메서드를 오버라이딩하여 특정 시점에 코드가 실행되도록 설정할 수 있다.  
  
  
  
# Component life cycle  
## 1.1 mounting  
아래 메서드들은 컴포넌트의 인스턴스가 생성되어 DOM상에 삽입될 때 순서대로 호출된다.  
- constructor()  
- static getDerivedStateFromProps()
- render()
- componentDidMount()
  
## 1.2 updating  
- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

## 1.3 unmounting
- componenetWillUnmount()
  
  
  
### 1.1.1 constructor() - mounting
메서드를 바인딩하거나 state를 초기화하는 작업일경우 사용한다. 그렇지않다면 구현하지 않아도 된다.  
this.state에 객체를 할당하여 지역state를 초기화한다.  
인스턴스에 이벤트 처리 메서드를 바인딩 한다.  
  
```javascript
constructor(props) {
  super(props);
  // 여기서 this.setState()를 호출하면 안됨
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
> constructor()내부에서 setState()를 호출하면 안된다. 컴포넌트에 지역 state가 필요하다면 생성자 내에서 this.state에 초기 state값을 할당하면 된다.
  
  
  
### 1.1.2 render() - mounting / updaing
```javascript
render()
```
`render()` 메서드는 클래스 컴포넌트에서 반드시 구현해야되는 유일한 메서드다.  
이 메서드가 호출되면 1. React엘리먼트, 2. 배열 and Fragment, 3. portal, 4. 문자열/숫자, 5. Boolean or null 중 하나를 반환해야 한다.
  
  
  
### 1.1.3 componentDidMount() - mounting
```javascript
componentDidMount()
```
`componentDidMount()`는 컴포넌트가 마운트된 직후에 호출된다.  
DOM노드가 있어야 하는 초기화 작업을 이 메서드에서 작업하면된다.  
  
  
  
### 1.2.1 componentDidUpdate() - updating
```javascript
componentDidUpdate(prevProps, prevState, snapshot)
```
`componentDidUpdate()`는 갱신이 일어난 직후에 호출된다. 이 메서드는 최초 렌더링에서는 호출되지 않는다. 


```javascript
componentDidUpdate(prevProps) {
  // 전형적인 사용 사례 (props 비교하지않으면 무한반복이 일어날 수 있으니 주의)
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
`setState()`를 즉시 호출할 수 있지만, 위에서 처럼 조건문으로 감싸주지않으면 무한반복이 발생할 수 있다...
  
  
  
### 1.3.1 componenetWillUnmount() - unmounting
```javascript
componentWillUnmount()
```
`componentWillUnmount()`는 컴포넌트가 마운트 해제되어 제거되기 직전에 호출된다. 
쉽게 말해 컴포넌트가 죽는것(페이지를 바꿀 때 컴포넌트는 죽는다)
이 메서드를 호출하면 컴포넌트들이 rerendering되지 않으므로 `setState()`를 호출하면 안된다.
컴포넌트 인스턴스가 unmount되면 다시 mount되지 않는다.