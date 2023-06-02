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

// key :less=past, present=present, greater=future//
    if (militaryTimes[i] < currentHour) {
      newInput.addClass("past");
    } else if (militaryTimes[i] === currentHour) {
      newInput.addClass("present");
    } else newInput.addClass("future");

    //https://youtu.be/TrGI9Yki-24//Appending new elements to the DOM//
    newDiv.append(newP, newInput, newBtn);
    $(".container").append(newDiv);
  }

  const createEvent = (rowId) => {
    // create text section
   var  textAreaEl = $("<textarea>");
   textAreaEl.val("enter your event");

   textAreaEl.focus();

   // append section//
   $("#" + rowId).append(textAreaEl);

};

   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify/

   //  save button by clicking /Store local//
   $(".saveBtn").on("click", function () {
    var masterInputs = [];
    for (var i = 9; i < 18; i++) {
      var userInput = $("#" + i).val();
      masterInputs.push(userInput);
    }
    localStorage.setItem("savedTasks", JSON.stringify(masterInputs));
  });

   //  local = refreshed
   var storedTasks = JSON.parse(localStorage.getItem("savedTasks"));
  console.log(storedTasks);

   // Set  into the input values
   for (i = 0; i < storedTasks.length; i++) {
    // Set the storedTasks input values
    $("#" + (i + 9)).val(storedTasks[i]);
  }
}) 
