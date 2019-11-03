# [Javascript] async function



async function 선언은 AsyncFunction 객체를 반환하는 하나의 비동기 함수를 정의한다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환한다. 그러나 비동기 함수를 사용하는 코드의 구문과 구조는 표준 동기 함수를 사용하는 것과 많이 비슷하다. 

   

  

또한 async function expression을 사용해서 async function을 선언할 수 있다.

   

#### **1. Syntax**

```
async function name([param[, param[, ... param]]]) { 
    statements
}
```

   

#### **1.1 Example**

```
getMovies = async () => { // 이 함수가 비동기라고 한것이고 = "너는 이걸 기다려야 해"라는 말임
    const data = await axios.get("https://blabla..."); // "axios가 끝날 때까지 기다렸다가 계속해."
}
```

곧 async함수의 실행을 일시 중지하고, data를 가져올때까지 기다려라 라는 뜻이다.  

await 키워드는 async 함수에서만 유효하다. async 라는 말 없이 await은 쓸 수 없다.  