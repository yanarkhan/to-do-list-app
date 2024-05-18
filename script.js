const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // ketika selesai add maka nilai kolom input langsung hilang
  saveData();
}

listContainer.addEventListener("click", function (elemen) {
  if (elemen.target.tagName === "LI") {
    elemen.target.classList.toggle("checked");
    saveData();
  } else if (elemen.target.tagName === "SPAN") {
    elemen.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
