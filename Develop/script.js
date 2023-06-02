// website that I used to help me complete this//
//https://www.w3schools.com/jquery//
///https://momentjs.com///Time and Date//
$(document).ready(function(){
  
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

  //Hours and military times array//
  //https://www.tutorialsteacher.com/javascript/javascript-for-loop//
  for (var i = 0; i < hour.length; i++) {
    //Create html elements, jQuery//
    var newBtn = $("<btn>");
    var newDiv = $("<div>");
    var newInput = $("<input>");
    var newP = $("<p>");
   

 //Add styles //
 newBtn.addClass("col-sm-1 saveBtn fa fa-save");
 newDiv.addClass("row");
 newInput.addClass("col-sm-10 description");
 newInput.attr("id", militaryTimes[i]);
 newP.addClass("col-sm-1 time-block hour");
 newP.text(hour[i]);

