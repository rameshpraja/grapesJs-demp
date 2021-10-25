import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSettlementComponent } from './un-settlement.component';

describe('UnSettlementComponent', () => {
  let component: UnSettlementComponent;
  let fixture: ComponentFixture<UnSettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnSettlementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
