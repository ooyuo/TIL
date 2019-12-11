import "./styles.css";

const pendingList = document.getElementById("js-pending"),
  finishedList = document.getElementById("js-finished"),
  form = document.getElementById("js-form"),
  input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks; // localStorage에서 불러온 값을 넣어줌

function getTaskObject(text) { // id 할당
  return {
    id: String(Date.now()),
    text
  };
} 

function savePendingTask(task) { // 
  pendingTasks.push(task);
}

function findInFinished(taskId) { // id값 찾기
  return finishedTasks.find(function(task) {
    return task.id === taskId;
  });
}

function findInPending(taskId) { // id값 찾기
  return pendingTasks.find(function(task) {
    return task.id === taskId;
  });
}

function removeFromPending(taskId) { // pendinngList에서 삭제버튼 클릭
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function removeFromFinished(taskId) { // finishedList에서 삭제버튼 클릭
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function addToFinished(task) { // pending -> finished로 옮겨짐
  finishedTasks.push(task);
}

function addToPending(task) { // finished -> pending으로 옮겨짐
  pendingTasks.push(task);
}

function deleteTask(e) {
  /*
  1. 클릭된 li 삭제
  2. removeFromFinished 호출
  3. removeFromPending 호출
  4. 현재 상태 저장
  */
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeFromFinished(li.id);
  removeFromPending(li.id);
  saveState();
}

function handleFinishClick(e) {
/*
1. 삭제할 노드를 가져와서 삭제
2. 목록에서 id값을 찾아 지움
3. finishedList에 추가
4. finishedList html 그려주기
4. localStorage에 저장
*/  
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  paintFinishedTask(task);
  saveState();
}

function handleBackClick(e) {
/*
1. 삭제할 노드를 가져와서 삭제
2. 목록에서 id값을 찾아 지움
3. pendingList에 추가
4. pendingList html 그려주기
4. localStorage에 저장
*/
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  addToPending(task);
  paintPendingTask(task);
  saveState();
}

function paintPendingTask(task) { // 할목록 html로 그려주기 + 클릭 이벤트
  /*
  1. li, span, button 만들기
  2. 엘리먼트에 값 부여
  3. 삭제버튼에 click이벤트 할당
  4. 완료버튼에 click이벤트 할당
  */
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = task.text;
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTask);
    li.append(span, deleteBtn);
    li.id = task.id;
  
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.addEventListener("click", handleFinishClick);
    li.append(completeBtn);
    pendingList.append(li);

}

function paintFinishedTask(task) { // 완료목록 html로 그려주기 + 클릭 이벤트
  /*
  1. li, span, button 만들기
  2. 엘리먼트에 값 부여
  3. 삭제버튼에 click이벤트 할당
  4. 완료버튼에 click이벤트 할당
  */
 const li = document.createElement("li");
 const span = document.createElement("span");
 const deleteBtn = document.createElement("button");
 span.innerText = task.text;
 deleteBtn.innerText = "❌";
 deleteBtn.addEventListener("click", deleteTask);
 li.append(span, deleteBtn);
 li.id = task.id;

 const backBtn = document.createElement("button");
 backBtn.innerText = "💨";
 backBtn.addEventListener("click", handleBackClick);
 li.append(backBtn);
 finishedList.append(li);
}

function saveState() { // localStorage에 string으로 값 저장
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}

function loadState() { // localStorage에서 tasks를 가져옴
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function restoreState() { // html로 그려줌
  pendingTasks.forEach(function(task) {
    paintPendingTask(task);
  });
  finishedTasks.forEach(function(task) {
    paintFinishedTask(task);
  });
}

function handleFormSubmit(e) {
  /*
  1. input 값 가져오기
  2. html에 표현할 함수 호출
  3. pendingList 저장할 함수 호출
  4. 현재 상태 저장
  */
 e.preventDefault();
 const taskObj = getTaskObject(input.value);
 input.value = "";
 paintPendingTask(taskObj); // HTML에서 그려줌
 savePendingTask(taskObj); // 내부적으로 저장
 saveState(); // 상태를 localStorage에 저장
}

function init() {
  /* 
  1. submit이벤트 할당
  2. localStorage에서 값 가져오기
  3. paintPendingTask, paintFinishedTask 저장 
  */
  form.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState(); 
}
init();
