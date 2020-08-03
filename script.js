//date at top
var NowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = NowMoment.format('LLLL')


// $(":button").addClass("saveBtn");

// //text area
// var textArea = document.createElement("textarea")
// $(".col-8").append(textArea);
// textArea.setAttribute("style", "width:100%;")



var rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      rows.setAttribute("class", "present");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      rows.setAttribute("class", "past");
    } else {
      rows.setAttribute("class", "future");
    }
  }
});

function setAttribute() {

};

// $(".time-block").each(function()) {

// }