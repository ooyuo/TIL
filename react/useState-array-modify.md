배열에 항목 수정하기
=============  
  
user의 이름을 클릭하면 Toggle이벤트가 발생하게 한다. 
  
  
  
## 설계순서  
1. user에 active 속성을 추가한다.  
2. id와 일치하느냐를 따져서 일치한다면 color를 green으로 바꿔주고, 그렇지않다면 그냥 냅둔다. - Toggle, 삼항연산자 사용  
  
  
```javascript
const [users, setUsers] = useState([
    {
        id: 1,
        username: 'doyoun',
        email: 'doyoun525@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'woohuck',
        email: 'woo@naver.com',
        active: false
    },
    {
        id: 3,
        username: 'ddoddo',
        email: 'ddoddo@naver.com',
        active: false
    }
]); //useState로 users를 컴포넌트화한다.
```
  
  

```javascript
<b
    style={{
        cursor: 'pointer', // 호버될때 커서가 손가락 모양으로 바뀜
        color: user.active ? 'green' : 'black' // active가 true이면 green 아니면 black
    }}
    onClick={() => onToggle(user.id)} // 클릭하면 onToggle함수 실행(아이디 값으로)
>         
```  
  
  
  
```javascript
function UserList({ users,onRemove,onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
```  
> 불변성을 지키는 map() 함수를 사용해 id값이 일치하는 항목을 따져서 Toggle이벤트를 준다.
