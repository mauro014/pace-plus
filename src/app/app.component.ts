import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SplitsCalculatorComponent } from './components/splits-calculator/splits-calculator.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet , SplitsCalculatorComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pace-plus';
}
