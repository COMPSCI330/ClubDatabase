var events = [
  {'Date': new Date(2019, 11, 5), 'Title': 'Blood Drive at 3:25pm.'},
  {'Date': new Date(2020, 0, 5), 'Title': 'Red Cross Town Hall at 5pm at Tech Auditorium', 'Link': 'https://redcross.org'},
  {'Date': new Date(2020, 0, 15), 'Title': 'Red Cross Food Drive at 12pm at University Library.'},
  {'Date': new Date(2019, 10, 5), 'Title': 'Blood Drive at 3:25pm.'}
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
