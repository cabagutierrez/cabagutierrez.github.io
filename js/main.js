$(function() {
    // Grab the current date
    var currentDate = new Date();

    // Set some date in the past. In this case, it's always been since Jan 1
    var pastDate  = new Date(2015, 5, 24, 13);

    // Calculate the difference in seconds between the future and current date
    var diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.clock').FlipClock(diff, {
        clockFace: 'DailyCounter'
    });
});
