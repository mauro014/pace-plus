import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Split } from '../../interfaces/split';
import { SplitService } from '../../services/split.service';
import { Time } from '../../interfaces/time';

@Component({
  selector: 'app-splits-calculator',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './splits-calculator.component.html',
  styleUrl: './splits-calculator.component.scss'
})
export class SplitsCalculatorComponent {
  splitList: Split[] | undefined = [];
  @Input() time! : Time;
  @Input() distance! : number;
  splitService = inject(SplitService);

  constructor() { 
    this.time = {hour: 0, minute: 0, second: 0};
  }

  calculateSplits(){
    this.splitList = this.splitService.calculateSplits(this.distance, this.time);
  }

}
