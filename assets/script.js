var currentDay = moment().format("MMM Do YYYY");
var currentTime = moment().format('LT');
var currentDayEl = document.getElementById('currentDay');
var currentTimeEl = document.getElementById('currentTime');
var presentHour = parseInt(moment().hour());
console.log('Hour ID is ', presentHour);

currentDayEl.textContent = currentDay;
currentTimeEl.textContent = currentTime;


$("textarea").each(function(){
    var hourBlock = parseInt($(this).attr('class'));
    console.log(hourBlock);
    if (hourBlock < presentHour) {
        console.log('past');
        $(this).addClass("past");
    }
    if (hourBlock == presentHour) {
        console.log('present');
        $(this).addClass("present");
    }
    if (hourBlock > presentHour) {
        console.log('future');
        $(this).addClass("future");
    }
    }
  );

  var hourlyToDo = window.localStorage.key(0);
  console.log('hourlyToDo:', hourlyToDo)
  console.log('key:', key)
