import { Component, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Split } from '../../interfaces/split';
import { SplitService } from '../../services/split.service';
import { Time } from '../../models/time';

@Component({
  selector: 'app-splits-calculator',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './splits-calculator.component.html',
  styleUrl: './splits-calculator.component.scss'
})
export class SplitsCalculatorComponent {

  splitService = inject(SplitService);

  @Input() time! : Time;
  @Input() distance! : number;
  @Input() strategy! : number;
  splitList: Split[] | undefined = [];

  constructor() { 
    this.distance = 10;
    this.time = new Time();
    this.strategy = 0;
  }

  calculateSplits(){
    this.splitList = this.splitService.calculateSplits(this.distance, this.time,  Number(this.strategy));
  }

}
