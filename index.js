var ctx1 = document.getElementById("TAG").getContext("2d");

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Percentage",
      backgroundColor: "#32D583",
      borderColor: "#32D583",
      borderWidth: 2,
      hoverBorderWidth: 4,
      hoverBorderColor: "yellow",
      data: [80, 89, 75, 79, 90, 93, 77],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
};

var myChart = new Chart(ctx1, {
  type: "line",
  data: data,
  options: options,
});

var ctx2 = document.getElementById("TAG1").getContext("2d");

var data = {
  labels: ["IT-A", "IT-B", "IT-C"],
  datasets: [
    {
      label: "SEM Percentage",
      backgroundColor: "#32D583",
      borderColor: "#32D583",
      borderWidth: 0,
      hoverBorderWidth: 2,
      hoverBorderColor: "yellow",
      data: [93, 87, 89],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
};

var myChart = new Chart(ctx2, {
  type: "bar",
  data: data,
  options: options,
});

var ctx3 = document.getElementById("TAG3").getContext("2d");

var data = {
  labels: ["MALE", "FEMALE"],
  datasets: [
    {
      backgroundColor: ["#32D583", "#121927"],
      borderColor: "#32D583",
      borderWidth: 0,
      hoverBorderWidth: 3,
      hoverBorderColor: "yellow",
      data: [35, 25],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
};

var myChart = new Chart(ctx3, {
  type: "pie",
  data: data,
  options: options,
});

let dashboard = document.querySelector(".container-Dashboard");
let attendance = document.querySelector(".container-Attendance");
let studentList = document.querySelector(".container-StudentList");
let title = document.querySelector(".title");

function displayDashboard() {
  dashboard.style.display = "block";
  attendance.style.display = "none";
  studentList.style.display = "none";
  title.innerHTML = "Dashboard";
  let attendanceButton = document.querySelector("button:nth-child(2)");
  attendanceButton.style.border = "none";
  let studentListButton = document.querySelector("button:nth-child(3)");
  studentListButton.style.border = "none";
  let dashboardButton = document.querySelector("button:nth-child(1)");
  dashboardButton.style.border = "3px solid #32d583";
  dashboardButton.style.borderTop = "0px";
  dashboardButton.style.borderLeft = "0px";
  dashboardButton.style.borderRight = "0px";
  dashboardButton.style.transition = "all 0s";
}

function displayAttendance() {
  dashboard.style.display = "none";
  attendance.style.display = "block";
  studentList.style.display = "none";
  title.innerHTML = "Attendance";
  let dashboardButton = document.querySelector("button:nth-child(1)");
  dashboardButton.style.border = "none";
  let studentListButton = document.querySelector("button:nth-child(3)");
  studentListButton.style.border = "none";
  let attendanceButton = document.querySelector("button:nth-child(2)");
  attendanceButton.style.border = "3px solid #32d583";
  attendanceButton.style.borderTop = "0px";
  attendanceButton.style.borderLeft = "0px";
  attendanceButton.style.borderRight = "0px";
  attendanceButton.style.transition = "all 0s";
}

function displayStudentList() {
  dashboard.style.display = "none";
  attendance.style.display = "none";
  studentList.style.display = "block";
  title.innerHTML = "Student List";
  let dashboardButton = document.querySelector("button:nth-child(1)");
  dashboardButton.style.border = "none";
  let attendanceButton = document.querySelector("button:nth-child(2)");
  attendanceButton.style.border = "none";
  let studentListButton = document.querySelector("button:nth-child(3)");
  studentListButton.style.border = "3px solid #32d583";
  studentListButton.style.borderTop = "0px";
  studentListButton.style.borderLeft = "0px";
  studentListButton.style.borderRight = "0px";
  studentListButton.style.transition = "all 0s";
}

function sideBarOpen() {
  let sideBar = document.querySelector(".side-bar");
  sideBar.style.display = "flex";
  sideBar.style.width = "120px";
  sideBar.style.transition = "display 10.5s";
  let menu = document.querySelector(".menu");
  menu.style.display = "none";
  let cancel = document.querySelector(".cancel");
  cancel.style.display = "block";
}
function sideBarClose() {
  let sideBar = document.querySelector(".side-bar");
  sideBar.style.display = "none";
  let menu = document.querySelector(".menu");
  menu.style.display = "block";
  let cancel = document.querySelector(".cancel");
  cancel.style.display = "none";
}

let presentCount = 0;
let absentCount = 0;

function att(n) {
  if (n == 1) {
    presentCount++;
  } else {
    absentCount++;
  }
}
function sub() {
  show();
  let Present = document.getElementById("present-today-number");
  Present.innerHTML = presentCount;
  let Absent = document.getElementById("absent-today-number");
  Absent.innerHTML = absentCount;
}
function show() {
  let output = document.getElementById("output");
  output.innerHTML = "Present: " + presentCount + ", Absent: " + absentCount;
}

function toggleButton() {
  var selectBox = document.getElementById("period");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var button = document.querySelector(".button");

  if (selectedValue === "period") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.disabled = true;
    button.classList.add("disabled");
  });
});
 