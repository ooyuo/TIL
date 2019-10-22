# `<h1>` - `<h6>` 

`<h1>` - `<h6>` 는 6단계의 문서제목을 구현한다.



## 사용 일람

- 제목폰트의 크기를 줄이기 위해 낮은 단계를 사용하지 말것. 대신 css의 font-size 속성 사용하기.
- 제목 단계를 생략하는 것을 피하라. 언제나 `<h1>`으로 시작해서 `<h2>` ... 순차적으로 기입해야한다.
- 첫 번째 단계의 제목은 한 페이지에 하나만 사용할 것.



## 사용 예

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here...</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here...</p>

<h3>Example 2</h3>
<p>Some text here...</p>

<h2>See also</h2>
<p>Some text here...</p>
```



## 접근성 고려사항

Don't

```html
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

Do

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

단계를 건너뛰기보다 순차적으로 사용할 것을 권고한다.