useMemo를 사용하여 연산한 값 재사용하기   
=============      
      
성능 최적화를 위해 연산된 값을 useMemo라는 Hook을 사용해 재사용하는 방법이다.   
      
      
      
## 설계순서      
1. user컴포넌트에 active값을 추가한다. username이 활성화되어있는 곳의 count를 반환할 것이다.  
2. 활성 사용자 수를 세는건 users에 변화가 있을때만 세야되는데 input값이 바뀔 때도 컴포넌트가 리렌더링되므로 불필요할때도 호출해서 자원이 낭비된다.  
useMemo를 사용해서 최적화작업을 한다.  
    
  
```javascript  
function countActiveUsers(users) {  
  console.log("활성 사용자 수를 세는중...");  
  return users.filter(user => user.active).length; // user에서 active가 true인 개수를 필터링한다.  
}  
  
const count = countActiveUsers(users);  
```  
활성 사용자 수를 세는 함수를 만든다. filter()를 사용하였다.  
이 함수를 만들고 호출을 하게되면 username이 active될때만 리렌더링되지않고 input값이 바뀔때도 같이 리렌더링된다.  
  
이를 해결하기위해 useMemo를 사용한다.  
  
```javascript  
const count = useMemo(() => countActiveUsers(users), [users]);  
// 첫번째 파라미터: 실행할 함수, 두번째 파라미터: 사용한 컴포넌트(deps)  
```  
