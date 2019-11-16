# useEffect로 clickEvent 다루기 - Hooks

### 목표
useEffect로 component를 클릭했을때 console창을 update시켜준다.  





1. ref안에 element.current가 있는지 확인하는 일을 한다.

2. element.current가 있다면 click이벤트를 부여한다.



+

(dependency가 존재하지 않는 한)

useEffect는 componentWillUnMount일떄 발생한다.

useEffect안에 function을 넣으면 componentDidMount, componentDidUpdate상태일때 호출된다.

  

(만약 dependency가 존재한다면)

매번 update될 때마다 eventListener가 추가될 것이다.



(component가 unmount된다면 (=componentWillUnMount))

return한다.

return된다면 Effect를 return받은 그 함수는 componentWillUnMount상태일때 호출된다.

function을 return받았다면 그 function은 componentWillUnMount로 부터 호출된 것이다.

