import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuMonthlyComponent } from './sku-monthly.component';

describe('SkuMonthlyComponent', () => {
  let component: SkuMonthlyComponent;
  let fixture: ComponentFixture<SkuMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
