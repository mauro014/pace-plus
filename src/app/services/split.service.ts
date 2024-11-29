import { Injectable } from '@angular/core';
import { Split } from '../interfaces/split';
import { Time } from '../interfaces/time';

@Injectable({
  providedIn: 'root'
})

export class SplitService {

  scndPerHour : number = 60 * 60;
  scndPerMinute : number = 60;

  constructor() { };

  calculateSplits(distance: number, time: Time) : Split[] | undefined {

    let totalTime : number = (time.hour * this.scndPerHour) + (time.minute * this.scndPerMinute) + time.second ;

    let intervalTime = totalTime / distance;

    let average : Time = this.convertLong2Time(intervalTime);

    let splitList: Split[] = [];
    
    for (let i = 0; i < distance; i++) {
      splitList.push(
        {
          id: i,
          split: {
            hour: 1,
            minute: 1,
            second: i,
          },
          lap: {
            hour: 1,
            minute: 1,
            second: i,
          },
          average
        }
      )
    }

    return splitList;
  }

  convertLong2Time(seconds: number) : Time{

    if(seconds > 0){

      let hour : number =  Math.floor( seconds / this.scndPerHour);

      let minutes : number = Math.floor((seconds - ( hour * this.scndPerHour))/ this.scndPerMinute);

      let second : number = seconds - ( hour * this.scndPerHour) - (minutes * this.scndPerMinute);

      return {
        hour: hour,
        minute: minutes,
        second: second
      }
    }
    else{
      return {
        hour: 0,
        minute: 0,
        second: 0
      }
    }
  }
}
