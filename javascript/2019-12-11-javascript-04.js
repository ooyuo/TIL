import "./styles.css";

const pendingList = document.getElementById("js-pending"),
  finishedList = document.getElementById("js-finished"),
  form = document.getElementById("js-form"),
  input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks; // localStorage에서 불러온 값을 넣어줌

function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text
  };
}

function savePendingTask(task) {
  pendingTasks.push(task);
}


function findInFinished(taskId) {
  return finishedTasks.find(function(task) {
    return task.id === taskId;
  });
}

function findInPending(taskId) {
  return pendingTasks.find(function(task) {
    return task.id === taskId;
  });
}
function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}
function addToFinished(task) {
  finishedTasks.push(task);
}
function addToPending(task) {
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
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  paintFinishedTask(task);
  saveState();
}
function handleBackClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  addToPending(task);
  paintPendingTask(task);
  saveState();
}
function paintPendingTask(task) {
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
function paintFinishedTask(task) {
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
function saveState() {
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}
function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function restoreState() {
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
 paintPendingTask(taskObj);
 savePendingTask(taskObj);
 saveState();
}
function init() {
  /* 
  1. submit이벤트 할당
  2. localStorage에서 값 가져오기
  3. 상태 재저장
  */
  form.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState();
}
init();
