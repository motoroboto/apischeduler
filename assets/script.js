var currentDay = moment().format("MMM Do YYYY");
var currentTime = moment().format('LT');
var currentDayEl = document.getElementById('currentDay');
var currentTimeEl = document.getElementById('currentTime');
var presentHour = parseInt(moment().hour());
console.log('Hour ID is ', presentHour);


    var tasks = {
        '8': 'here are some things',
        '9': '9AM',
        '10': '10AM',
        '11': '11AM',
        '12': '12PM',
        '13': '1PM',
        '14': '2PM',
        '15': '3PM',
        '16': '4PM',
        '17': '5PM',
        '18': '6PM',
        '19': '7PM',
    };
    console.log(tasks['08']);
    console.log(tasks['13']);




currentDayEl.textContent = currentDay;
currentTimeEl.textContent = currentTime;


$("textarea").each(function(){
    var hourBlock = parseInt($(this).attr('class'));
    console.log(hourBlock);
    if (hourBlock < presentHour) {
        console.log('past');
        $(this).addClass("past");
        $(this).append(tasks[hourBlock]);
    }
    if (hourBlock == presentHour) {
        console.log('present');
        $(this).addClass("present");
        $(this).append(tasks[hourBlock]);
    }
    if (hourBlock > presentHour) {
        console.log('future');
        $(this).addClass("future");
        $(this).append(tasks[hourBlock]);
    }
    }
  );

//   $("textarea").each(function(){
//     var hourBlock = parseInt($(this).attr('class')); 
//     console.log('task:', tasks[hourBlock]);
//     $(this).append(tasks[hourBlock]);

// });
