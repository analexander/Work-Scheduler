//date at top
var NowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = NowMoment.format('LLLL')


$(":button").addClass("saveBtn");

//text area
textArea = document.createElement("textarea")
$(".col-8").append(textArea);
textArea.setAttribute("style", "width:100%;")