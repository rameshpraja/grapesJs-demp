import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderWiseComponent } from './order-wise/order-wise.component';
import { OverallMonthlyComponent } from './overall-monthly/overall-monthly.component';
import { SkuMonthlyComponent } from './sku-monthly/sku-monthly.component';
import { UnSettlementComponent } from './un-settlement/un-settlement.component';

const routes: Routes = [
  {
    path: 'sku-monthly-report',
    component: SkuMonthlyComponent,
  },
  {
    path: 'order-wise-report',
    component: OrderWiseComponent,
  },
  {
    path: 'overall-monthly-report',
    component: OverallMonthlyComponent,
  },
  {
    path: 'un-settle-report',
    component: UnSettlementComponent,
  },
  {
    path: '',
    redirectTo: 'sku-monthly-report',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
