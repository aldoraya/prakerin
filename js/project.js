var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var codee1 = document.getElementById("code1");
var codee2 = document.getElementById("code2");
var codee3 = document.getElementById("code3");
function muncul1() {
  project1.style.display = "block";
  project2.style.display = "none";
  project3.style.display = "none";
  codee1.style.display = "none";
  codee2.style.display = "none";
  codee3.style.display = "none";
}
function muncul2() {
  project1.style.display = "none";
  project2.style.display = "block";
  project3.style.display = "none";
  codee1.style.display = "none";
  codee2.style.display = "none";
  codee3.style.display = "none";
}
function muncul3() {
  project1.style.display = "none";
  project2.style.display = "none";
  project3.style.display = "block";
  codee1.style.display = "none";
  codee2.style.display = "none";
  codee3.style.display = "none";
}
function code1() {
  project1.style.display = "none";
  project2.style.display = "none";
  project3.style.display = "none";
  codee1.style.display = "block";
  codee2.style.display = "none";
  codee3.style.display = "none";
}
function code2() {
  project1.style.display = "none";
  project2.style.display = "none";
  project3.style.display = "none";
  codee1.style.display = "none";
  codee2.style.display = "block";
  codee3.style.display = "none";
}
function code3() {
  project1.style.display = "none";
  project2.style.display = "none";
  project3.style.display = "none";
  codee1.style.display = "none";
  codee2.style.display = "none";
  codee3.style.display = "block";
}