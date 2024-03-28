import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAvbComponent } from './test-avb.component';

describe('TestAvbComponent', () => {
  let component: TestAvbComponent;
  let fixture: ComponentFixture<TestAvbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAvbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAvbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
