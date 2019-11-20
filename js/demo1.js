var events = [
  {'Date': new Date(2019, 11, 1), 'Title': 'Group meeting at 5pm.'},
];
var settings = {};
var element = document.getElementById('calendar');
calendar(element, events, settings);

function submit(){
var title = document.getElementById("title").value;
var month = document.getElementById("month").value;
var day = document.getElementById("day").value;
var year = document.getElementById("year").value;
events.push({'Date': new Date(year, month - 1, day), 'Title': title})
}
