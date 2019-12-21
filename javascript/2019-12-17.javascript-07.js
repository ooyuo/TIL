import "./styles.css";
const form = document.querySelector("form");
const input = document.querySelector("input");
const pendingList = document.querySelector(".pendingList");
const finishedList = document.querySelector(".finished");

const PENDING = "Pending";
const FINISHED = "finished";

let pendingTasks = [];

function getTaskObject(task) {
  return {
    id: pendingTasks.length + 1,
    task
  };
}

function handleDeletePending(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== li.id;
  });
  saveState();
}

function saveState() {
    localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
    //localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}
function printPendingList(taskObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const toSwitch = document.createElement("button");
  
  span.innerText = taskObj.task;
  delBtn.innerText = "❌";
  toSwitch.innerText = "💨";
  li.id = taskObj.id;
  console.log(li.id);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(toSwitch);
  pendingList.appendChild(li);

  delBtn.addEventListener("click", handleDeletePending);
}

function savePendingTask(task) {
  console.log("save");
  console.log(task);
  pendingTasks.push(task);
  console.log(pendingTasks);
}

function handleSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(input.value);
  console.log(taskObj);
  input.value = "";
  printPendingList(taskObj);
  savePendingTask(taskObj);
  saveState();
}
// function restoreState() {
//   pendingTasks.forEach(function(task) {
//     printPendingList(task);
//   });
// }

function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  //finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function init() {
  form.addEventListener("submit", handleSubmit);
  loadState();
 // restoreState();
}
init();