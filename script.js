export function toggleScheduleBox() {
  var scheduleBox = document.getElementById("schedule_box");
  if (scheduleBox.style.display === "none") {
    scheduleBox.style.display = "block";
  } else {
    scheduleBox.style.display = "none";
  }
}