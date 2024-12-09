import { Injectable } from '@angular/core';
import { Split } from '../interfaces/split';
import { Time } from '../models/time';

@Injectable({
  providedIn: 'root'
})

export class SplitService {

  constructor() { };

  calculateSplits(distance: number, totalTime: Time, strategy: string) : Split[] | undefined {

    let totalSeconds : number = totalTime.time2Seconds();
    let splitList: Split[] = [];
    let increaseRate : number = 0.008;
    let cumulativeSeconds : number  = 0;

    let baseRate = (distance-1)/2;

    let baseTimePerSegment : number  = (totalSeconds / distance) * Math.pow(1 + increaseRate,-baseRate);
    
    for (let i = 0; i < distance; i++) {

      let adjustment = Math.round(baseTimePerSegment * (1 + increaseRate * i));

      if (i == distance - 1)
      {
        adjustment  = totalSeconds - cumulativeSeconds;
      }

      cumulativeSeconds = cumulativeSeconds + adjustment ;

      splitList.push(
        {
          id: i,
          distance: i + 1,
          split: Time.seconds2Time(cumulativeSeconds),
          lap: Time.seconds2Time(adjustment),
          average: Time.seconds2Time(cumulativeSeconds / (i + 1))
        }
      )
    }

    return splitList;
  }
    
}
