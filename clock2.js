
        
        
class Clock {
    
    constructor(template , id) {
        this.template = template;
        this.display = document.getElementById(id);
        this.msecs = 0;
        this.second = 0;
        this.minute = 0;
    }
    StopWatch() {
        this.msecs++;

        if (this.msecs == 100) {
            this.second++;
            this.msecs = 0;
        }

        if (this.second == 60) {
            this.minute++;
            this.second = 0;
        }

        if (this.minute == 60) {
            this.hour++;
            this.minute = 0;
        }

        let msecString = this.msecs ;
        let secString = this.second;
        let minString = this.minute;

        if (this.minute < 10) {
            minString = "0" + minString;
        }

        if (this.second < 10) {
            secString = "0" + secString;
        }

        if (this.msecs < 10) {
            msecString = "0" + msecString;
        }
        
        let output = this.template
            .replace('m', minString)
            .replace('s', secString)
            .replace('ms', msecString)

        // console.log( output );
        this.display.innerHTML = output;
        
    }


    start() {
this.StopWatch();
        this.timer = setInterval( () => {
            this.StopWatch();
        }, 1 )
    }

    stop() {
        clearInterval(this.timer);
    }
    reset(){
        this.stop();
        this.minute = 0;
        this.second = 0;
        this.msecs = 0;
        this.display.innerHTML = '00:00.0';
    }
}
let stopwatch = new Clock('m:s.ms',"clock-1")

