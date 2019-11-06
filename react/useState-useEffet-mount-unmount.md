useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기  
=============    
    
useEffect라는 Hook을 사용해 컴포넌트가 마운트 됐을 때, 언마운트 됐을 때, 업데이트 될때(특정 props가 바뀔 때) 특정 작업을 처리하는 방법에 대해서   공부했다.  
    
    
    
## 설계순서    
1. useEffect를 import한다.  
2. useEffect를 사용한다. 첫번째 파라미터에는 함수, 두번째 파라미터에는 배열(deps)가 들어가야한다.  
  
  
## deps파라미터가 비었을 때  
  
```javascript  
import React, { useEffect } from 'react';  
  
function User( {user, onRemove, onToggle } ) {  
    // 첫번째 파라미터: 함수, 두번째 파라미터: 배열(deps)  
    useEffect(() => {  
        console.log("컴포넌트가 화면에 나타남"); // 마운트  
        return () => {   
            console.log("컴포넌트가 화면에서 사라짐"); // 언마운트  
        };  
    }, []); // deps가 비어있는 경우는 컴포넌트가 사라질 떄 cleanup함수가 호출됨  
```  
deps배열을 비우게 되면 컴포넌트가 처음 나타날때만 함수가 호출된다.  
  
## deps에 특정 값을 넣었을 때  
  
```javascript  
function User( {user, onRemove, onToggle } ) {  
    useEffect(() => {  
        console.log('user 값이 설정됨');  
        console.log(user); // 두번째로 실행됨  
        return () => {  
          console.log('user 가 바뀌기 전..');  
          console.log(user); // 업데이트가 발생되면 이 코드가 먼저 return문이 먼저 실행됨  
        };  
      }, [user]);  
```  
deps에 특정 값을 넣는다면 컴포넌트가 마운트, 언마운트, 업데이트됐을 때 호출된다.  
  
## deps 파라미터를 생략했을 때    
```javascript  
function User( {user, onRemove, onToggle } ) {  
    // 첫번째 파라미터: 함수, 두번째 파라미터: 배열(deps)  
    // 만약 deps배열을 비우게 되면 컴포넌트가 처음 나타날때만 함수가 호출됨  
    useEffect(() => {  
        console.log(user);
    });  
```  
deps파라미터를 생략했을 경우 컴포넌트가 리랜더링 될 때마다 호출된다.   
