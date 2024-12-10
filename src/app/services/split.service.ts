import { Injectable } from '@angular/core';
import { Split } from '../interfaces/split';
import { Time } from '../models/time';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  constructor() { }

  calculateSplits(distance: number, totalTime: Time, strategy: number) : Split[] | undefined {

    let totalSeconds : number = totalTime.time2Seconds();
    let splitList: Split[] = [];
    let accumulatedSeconds : number  = 0;

    let baseRate = (distance-1)/2;
    let firstSegmentTime : number  = (totalSeconds / distance) * Math.pow(1 + strategy,-baseRate);

    let segmentTime = 0;
    
    for (let i = 0; i < distance; i++) {

      segmentTime = i == 0 ? firstSegmentTime : segmentTime * (1 + strategy);

      if (i == distance - 1)
      {
        segmentTime  = totalSeconds - accumulatedSeconds;
      }

      accumulatedSeconds = accumulatedSeconds + segmentTime ;

      splitList.push(
        {
          id: i,
          distance: i + 1,
          split: Time.seconds2Time(accumulatedSeconds),
          lap: Time.seconds2Time(segmentTime),
          average: Time.seconds2Time(accumulatedSeconds / (i + 1))
        }
      )
    }

    return splitList;
  }
  
}
