import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipMaturityAmountCalcComponent } from './sip-maturity-amount-calc.component';

describe('SipMaturityAmountCalcComponent', () => {
  let component: SipMaturityAmountCalcComponent;
  let fixture: ComponentFixture<SipMaturityAmountCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SipMaturityAmountCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SipMaturityAmountCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
