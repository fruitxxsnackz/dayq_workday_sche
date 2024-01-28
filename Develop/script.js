
// Lets Html/CSS load first before running code.
$(document).ready(function () {

  // Set the today varibale to our current day in dayjs format, display on webpage.
  var today = dayjs().format('dddd, MMMM D');
 $('#currentDay').text(today);

//  Setting presenthour variable as an integer. For time comparison of calender to current time.
 var presenthour = parseInt(dayjs().format('H'), 10);

  // Function that lets the saveBtn class be functional upon clicking it; Takes values and sets them in local storage.
  $('.saveBtn').click(function (event) {

    // Gets values from id attribute.
    var hour = $(this).parent().attr('id');

    // Takes input values from class "description", takes all siblings.
    var event = $(this).siblings('.description').val();

    localStorage.setItem(hour, event)
  });
  
// Apply timeSto function to each timeblock element; Function works to ensure current time frames are colored accordingly.
  function timeSto() {
  $('.time-block').each(function () {
    
    // Setting timeFrame as an integer
    var timeFrame = parseInt(this.id.split('-')[1], 10);

    if (presenthour > timeFrame) {
    $(this).addClass('past').removeClass('present');
    } else if (presenthour === timeFrame) {
    $(this).addClass('present').removeClass('past future');
    } else if (presenthour < timeFrame) {
     $(this).addClass('future').removeClass('present past'); }
  });
};
  
// Loops over set values and gets them from localstorage.
  for (var hour = 9; hour <= 17; hour++) {
    $('#hour-' + hour + ' .description').val(localStorage.getItem('hour-' + hour));
  };
  
 timeSto();

});
