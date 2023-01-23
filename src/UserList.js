import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  /*
  // deps가 비어있다면 컴포넌트가 한번 마운트 될때만 실행됨
  useEffect(() => {
    
      마운트 될때
      props => state
      REST API
      D3 Video.js
      setInterval, setTimeout
    
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      
      언마운트 될때
      clearInterval, clearTimeout
      라이브러리 인스턴스 제거
      
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
*/

  // useEffect를 사용해서 마운트, 언마운트 업데이트시 작업 설정
  useEffect(() => {
    /*
    deps에 user를 넣는 다면 해당 값이 바뀔때마다 등록된 함수가 호출되고, 함수가 바뀌기 직전에 클리너 함수에서 호출됨
    ** useEffect에서 참조하는 디팬더시는 deps에 넣어줘야함 -> 최신의 값을 가리키고 있게 하기위해
    비어있다면 : 마운트, 언마운트 될때만 호출됨
    */
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      // 클린함수 (뒷정리 함수)
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      {/* id값을 파라미터로 넣어서 호출할땐 아래와 같이 이벤트를 호출해야함, onRemove(id)로 작성하면안됨, 랜더링 되자마자 호출되어버림 */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
// 랜더링된 결과물을 재사용
export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);

/*
useMemo, useCallback, React.memo는 
성능 최적화가 정말 필요하다 싶은 경우에만 사용.
코드가 복잡해지고, 미미한 성능 최적화를 해주기 떄문에
*/
