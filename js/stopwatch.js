//Timer
// Credit: Saad  https://www.youtube.com/channel/UCy8-vp4NblZvyBpU6sqA3ow

// Constructor Function
function Stopwatch(element) {
// Local Variables
    let time = 0; // Starting time
    let interval;  // Keeps updating time once Started
    let offset;  // Calculate how much time has passed

// Local Functions
    // What interval will run continually every 10ms
    function update() {
        if (this.isOn) {  // If not, used for resetting time back to 00:00.000
            time += trackTime();  // Whatever time is passed in trackTime() will be added to time
        }
        let formattedTime = timeFormatter(time);  // Passes in formateed time
        element.textContent = formattedTime;
    };

    // Calculates how much time has passed
    function trackTime() {
        const now = Date.now();  // Calculates current time
        const timePassed = now - offset;  // Current time - how much time has passed
        offset = now;  // each time function is run will calculate the time passed already
        return timePassed;
    };

    // Formats time to Mins, Sec, Msecs
    function timeFormatter(timeInMillSec) {
        const time = new Date(timeInMillSec);  //  *does not effect time in Local Variables. Different
        let minutes = time.getMinutes().toString();
        let seconds = time.getSeconds().toString();

        if (minutes.length < 2) {  // Length less than 2 digits add a 0 to the front for formatting
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {  // Length less than 2 digits add a 0 to the front for formatting
            seconds = '0' + seconds;
        }
        return minutes + ' : ' + seconds;
    };

// Public Functions
    this.isON = false; // Start with timer off

    this.start = function() {
        if(!this.isOn) {  // If this is not on (true) run this
            interval = setInterval(update.bind(this), 10); // Runs update function over and over very fast. Bind for this.isOn in update()
            offset = Date.now(); // When stopwatch starts
            this.isOn = true;  // isOn now true as stopwatch is running
        }
    };

    this.stop = function() {
        if (this.isOn) {  // If the stop watch is running, when executed run this function
            clearInterval(interval);  // Passing in interval
            interval = null;  // Sets interval to null
            this.isOn = false;  // isOn now false as stopwatch is stopped back to it's original state
        }
    };

    this.reset = function() {
        time = 0;  // Sets time back to 0
        update();
    };
};

//DOM
const timer = document.getElementById('timer');

const watch = new Stopwatch(timer);

function startTimer() {
    watch.start();
};

function stopTimer() {
    watch.stop();
};

function resetTimer() {
    if (watch.isOn) {  // If timer is running for some reason stop it, the reset
        watch.stop();
    }
    watch.reset();
};


// Credit: Saad  https://www.youtube.com/channel/UCy8-vp4NblZvyBpU6sqA3ow
