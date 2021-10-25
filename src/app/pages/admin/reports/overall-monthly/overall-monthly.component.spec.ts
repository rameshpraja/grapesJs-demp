import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallMonthlyComponent } from './overall-monthly.component';

describe('OverallMonthlyComponent', () => {
  let component: OverallMonthlyComponent;
  let fixture: ComponentFixture<OverallMonthlyComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
