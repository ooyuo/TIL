import "./styles.css";

const form = document.querySelector(".js-form"),
  input = form.querySelector(".js-input"),
  pendingList = document.querySelector(".pendingList"),
  finishedList = document.querySelector(".finishedList");

const PENDING = "pending";
const FINISHED = "finished";

let pendingTasks, finishedTasks;
function savePendingTask(task) {
  //
  pendingTasks.push(task);
}
function saveState() {
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}
function addToFinished(task) {
  finishedTasks.push(task);
}
function addToPending(task) {
  pendingTasks.push(task);
}
function findInPending(taskId) {
  return pendingTasks.find(function(task) {
    return task.id === taskId;
  });
}
function findInFinished(taskId) {
  return finishedTasks.find(function(task) {
    return task.id === taskId;
  });
}
function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}
function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}
function handleSwitchTo_F(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  printFinishedTask(task);
  saveState();
}
function handleSwitchTo_P(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  addToPending(task);
  printPendingTask(task);
  saveState();
}
function handleDeleteTasks(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeFromFinished(li.id);
  removeFromPending(li.id);
  saveState();
}
function printPendingTask(taskObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");    
  const changeTo_F = document.createElement("button");
  li.id = taskObj.id; 

  span.innerText = taskObj.taks;
  delBtn.innerText = "❌";
  changeTo_F.innerText = "✅";

  span.append(delBtn, changeTo_F);
  li.append(span);
  pendingList.appendChild(li);

  delBtn.addEventListener("click", handleDeleteTasks);
  changeTo_F.addEventListener("click", handleSwitchTo_F);
}
function printFinishedTask(tasks) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const changeTo_P = document.createElement("button");

  span.innerText = tasks.task;
  delBtn.innerText = "❌";
  changeTo_P.innerText = "💨";
  li.id = tasks.id;

  span.append(delBtn, changeTo_P);
  li.append(span);
  finishedList.appendChild(li);

  delBtn.addEventListener("click", handleDeleteTasks);
  changeTo_P.addEventListener("click", handleSwitchTo_P);
}
function getTaskObject(task) {
  return {
    id: String(Date.now()),
    task
  };
}
function restoreState() {
  pendingTasks.forEach(function(task) {
    printPendingTask(task);
  });
  finishedTasks.forEach(function(task) {
    printFinishedTask(task);
  });
}
function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}
function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(input.value);
  input.value = "";
  printPendingTask(taskObj);
  savePendingTask(taskObj);
  saveState();
}
function init() {
  form.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState();
}
init();
