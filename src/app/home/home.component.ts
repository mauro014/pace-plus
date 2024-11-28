import { Component } from '@angular/core';
import { PaceSpeedConverterComponent } from '../components/pace-speed-converter/pace-speed-converter.component';
import { SplitsCalculatorComponent } from '../components/splits-calculator/splits-calculator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PaceSpeedConverterComponent , SplitsCalculatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
