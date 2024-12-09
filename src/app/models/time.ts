export class Time {
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    time2Seconds() : number{
        return (this.hours * 3600) + (this.minutes * 60) + this.seconds ;
    }

    initializeFromSeconds(totalSeconds: number){
        this.hours =  Math.floor( totalSeconds / 3600);
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = Math.floor(totalSeconds % 60);
    }

    convert2String() : string {

        let strHours : string = (this.hours < 10 ? "0" : "") + this.hours;
        let strMinutes : string = (this.minutes < 10 ? "0" : "") + this.minutes;
        let strSeconds : string = (this.seconds < 10 ? "0" : "") + this.seconds;

        return `${strHours}:${strMinutes}:${strSeconds}`;
    }

    static seconds2Time(seconds: number) : Time{

        let hours : number =  Math.floor( seconds / 3600);
        let minutes : number = Math.floor((seconds % 3600) / 60);
        let remainSeconds : number = Math.floor(seconds % 60);

        let time = new Time();
        time.hours = hours;
        time.minutes = minutes;
        time.seconds = remainSeconds;

        return time;
    }
}
