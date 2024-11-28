import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsCalculatorComponent } from './splits-calculator.component';

describe('SplitsCalculatorComponent', () => {
  let component: SplitsCalculatorComponent;
  let fixture: ComponentFixture<SplitsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitsCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
