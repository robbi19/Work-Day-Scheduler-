//https://www.w3schools.com/jquery/
$(document).ready(function(){

  ///https://momentjs.com///Time and Date//
  //https://www.youtube.com/watch?v=LvIt1GuS_DI
  //Hours and military times array//
  var today = moment().format("dddd, MMMM Do");
  $("#currentDay").text(today);
  var currentHour = moment().format('HH');
  
  for(let i =9; i <=17; i++) {
      // event
      const events = $("#" + i);
      const rowId = events.attr("id");
      if(currentHour > i) {
          events.addClass("past");
      } else if(currentHour == i) {
          events.addClass("present");
      } else if(currentHour < i) {
          events.addClass("future");
      };
  };