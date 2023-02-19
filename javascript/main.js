// #1. 특정DOM에 active class 추가, 삭제
const boxEl = document.querySelector(".box");

boxEl.classList.add("active");
let isContains = boxEl.classList.contains("active");
console.log(isContains); // true

boxEl.classList.remove("active");
isContains = boxEl.classList.contains("active");
console.log(isContains); // false

boxEl.addEventListener("click", function () {
  console.log("click");
  boxEl.classList.add("active");
  console.log(boxEl.classList); // DOMTokenList(2) ['box', 'active', value: 'box active']
  boxEl.classList.remove("active");
  console.log(boxEl.classList); // DOMTokenList ['box', value: 'box']
});

// #2. HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll(".box");

boxEls.forEach((boxEl, index) => {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
  /*   
  0 div.box.order-1
  1 div.box.order-2
  2 div.box.order-3
  3 div.box.order-4  
  */
});

// #3. Getter, Setter
// Getter
console.log(boxEl.textContent); // 1

// Setter
boxEl.textContent = "setter";
console.log(boxEl.textContent); // setter
