import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAddEditComponent } from './finance-add-edit.component';

describe('FinanceAddEditComponent', () => {
  let component: FinanceAddEditComponent;
  let fixture: ComponentFixture<FinanceAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
