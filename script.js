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
// load from local storage
console.log("Hour: " + rowHour + " = " + localStorage.getItem(rowHour));
});


$( ".saveBtn" ).click(function(e) {
//get the hour from the button that we clicked
//find the description in the field for that button
//save that description in localstorage with the hour as the key
e.preventDefault();
var hour = e.target.id.substring(5);
var description = $("#desc-" + hour).val();
localStorage.setItem("hour: " + hour, "event: " + description);
});