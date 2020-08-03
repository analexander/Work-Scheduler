//displays date at top
var NowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = NowMoment.format('LLLL')

// variables
var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));

// Array of rows
Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString.slice(5));
    }
  if (rowHour) {
    // Compares row id to current hour and sets class
    if (currentHour === rowHour) {
      row.setAttribute("class", "present");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      row.setAttribute("class", "future");
    } else {
      row.setAttribute("class", "past");
    }
  }
});

//create variables from html
// var saveBtn = document.querySelector(".saveBtn");
// // var descriptionEl = document.querySelector(".description");

// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//         var myContent = document.getElementsByClassName("description").textContent;
//         localStorage.setItem("myContent", myContent);
//       });


var description = $(".description").value;
var hour = $(".hour").value;


$( ".saveBtn" ).click(function() {
localStorage.setItem("hour", hour);
localStorage.setItem("description", description);
});

// function setAttribute() {

// };

// $(".time-block").each(function()) {

// }