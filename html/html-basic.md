HTML 문법  
=============  
  
아래는 HTML의 기본 형태이다. 열린 태그, 닫힌 태그로 구성된다.  
<TAG></TAG>   
시작하고 종료되는 구조라고도 한다.  
  

## 1. Attributes와 value  

태그의 기능을 확장하기 위해 속성을 사용한다.  
<TAG 속성="값"></TAG>  
  

<!-- <img src="..." alt="..." />-->  
이미지를 삽입할때는 <img /> 태그를 사용하고 src로 이미지의 위치를 지정한다. 웹 주소인 경우 url형식으로, 로컬내에 있는   경우 파일경로명을 입력한다.   
alt는 이미지를 출력하지 못하는 상황에 이미지 대신 보여질 텍스트를 지정한다.  
  


## 2. HTML 문서의 범위  

<!-- HTML 5 -->  
<!DOCTYPE html>  
<html>  
  <head>  
    문서의 정보 <!-- 타이틀, link, <style>직접 입력 -->  
  </head>  
  <body>  
    문서의 구조  
  </body>  
</html>  
  


## 3. DOCTYPE이란?  

DTD(Document Type Definition)은 마크업 언어에서 문서형식을 정의한다.  
HTML문서를 어떤 HTML 버전의 해석방식으로 구조화하면 되는지를 알려준다.  
현재 표준 모드는 HTML5이다.  
  


## 4. META(웹 페이지의 정보)  

<meta>에서 사용할 수 있는 속성  
- charset: 문자인코딩 방식(UTF-8, EUC-KR 등)  
- name: 검색엔진 등에 제공하기 위한 정보의 종류(author, description, ketwords, viewport 등)  
- content: name이나 http-equiv 속성의 값 제공  
  
  
### 4.1 utf-8이란?  
  
```javascript
<meta charset="utf-8>
```  
utf-8은 웹페이지에서 어떤 문자라도 취급할 수 있다는 것을 의미한다.  
  
  
### 4.2 저자와 설명을 추가  
  
<meta>요소는 name과 content라는 속성을 가진다.  
- name: 메타 요소가 어떤 정보의 형태를 갖고 있는지 알려준다.  
- content: 실제 메타데이터의 컨텐츠이다.  
  
  

## 5. 하이퍼링크란 무엇인가?  
하이퍼링크는 문서들을 다른 문서들과 연결시켜 주기도 하고, 우리가 원하는 다른 resource들과 연결해주기도 한다. 또한 문서들의 특정 부분들끼리 연결할 수 있다.  
  
> URL은 HTML, 텍스트파일, 이미지, 비디오, 오디오, 웹상에서 존재할 수 있는 어느것이라 할지라도 연결할 수 있다.  
  
  
### 5.1 링크의 구조  
내부링크로 전환할 <a>요소를, 그리고 가리키는 링크로 <href>요소가 있다.  