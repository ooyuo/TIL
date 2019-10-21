## base tag

HTML문서에 포함된 모든 상대 URL들의 기준 URL을 설정한다.

한 문서에 하나의 <base />요소만 포함 가능하다.



문서의 기준 url은 스크립트 document.baseURI를 사용하여 문서에 맵핑될 수 있다.





## 속성

이 요소는 전역 속성을 포함한다.

- href

  상대 URL주소들을 통해 가용될 기준 URL을 나타낸다. 절대, 상대 URL가 허용된다.

- target

  target이 정의되지 않은 하이퍼링크나 폼을 통해 결과를 표시할 기본 로케이션을 가리킬 이름이나 키워드를 나타낸다.





## 예제

이미지를  href로 불러와야할때 흔히 사용하는 방법이다.

```html
<link rel="stylesheet" href="./sample.css" />
```



하지만 저 css파일이 다른 폴더 안에 있다면? css파일이 있다고 가정하고 써보자.

```html
<link rel="stylesheet" href="./css/sample.css" />
```

형태가 될 것이다. 참고로 href의 ./은 생략가능하다. 

href속성을 여러개 써야하고 또 상대경로가 길어진다면? 너무 쓰기 번거롭다.



이럴때 <base />를 사용한다.

```html
<base href="./css/" />
```

base의 href속성에 중복되는 경로를 적어준다면 중복되는 부분없이 심플하게 css를 불러올 수 있다.

```html
<link rel="stylesheet" href="sample.css"/>
```



