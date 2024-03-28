import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCalcComponent } from './time-calc.component';

describe('TimeCalcComponent', () => {
  let component: TimeCalcComponent;
  let fixture: ComponentFixture<TimeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
