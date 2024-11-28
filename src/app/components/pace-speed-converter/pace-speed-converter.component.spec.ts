import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceSpeedConverterComponent } from './pace-speed-converter.component';

describe('PaceSpeedConverterComponent', () => {
  let component: PaceSpeedConverterComponent;
  let fixture: ComponentFixture<PaceSpeedConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaceSpeedConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaceSpeedConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
