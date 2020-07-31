//date at top
var NowMoment = moment();
var displayMoment = document.getElementById('currentDay');
displayMoment.innerHTML = NowMoment.format('LLLL')

$(":button").addClass("saveBtn");