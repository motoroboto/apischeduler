var currentDay = moment().format("MMM Do YYYY");
var currentTime = moment().format('LT');
var currentDayEl = document.getElementById('currentDay');
var currentTimeEl = document.getElementById('currentTime');
var presentHour = parseInt(moment().hour());

currentDayEl.textContent = currentDay;
currentTimeEl.textContent = currentTime;


$("textarea").each(function(){
    var hourBlock = parseInt($(this).attr('class'));
    if (hourBlock < presentHour) {
        $(this).addClass("past");
        var x = localStorage.getItem("task"+hourBlock)
        $(this).append(x);
    } if (hourBlock == presentHour) {
        $(this).addClass("present");
        var x = localStorage.getItem("task"+hourBlock)
        $(this).append(x);
    } if (hourBlock > presentHour) {
        $(this).addClass("future");
        var x = localStorage.getItem("task"+hourBlock)
        $(this).append(x);
    }});

  $(".saveBtn").click(function(){
    var taskNum = parseInt(this.id);
    taskContent = $("body").find('#text-block'+ taskNum);
    localStorage.setItem('task'+ taskNum, taskContent[0].value);
}); 

$(".clearBtn").click(function(){
    localStorage.clear();
    location.reload();
    });
