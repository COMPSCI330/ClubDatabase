var events = [
  {'Date': new Date(2019, 11, 5), 'Title': 'Blood Drive at 3:25pm.'},
  {'Date': new Date(2020, 0, 5), 'Title': 'Red Cross Town Hall at 5pm at Tech Auditorium', 'Link': 'https://redcross.org'},
  {'Date': new Date(2020, 0, 15), 'Title': 'Red Cross Food Drive at 12pm at University Library.'},
];
var settings = {};
var element = document.getElementById('calendar');
calendar(element, events, settings);
