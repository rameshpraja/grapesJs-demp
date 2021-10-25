import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceAddEditComponent } from './finance-add-edit/finance-add-edit.component';
import { FinanceListComponent } from './finance-list/finance-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: FinanceListComponent
  },
  {
    path: 'add',
    component: FinanceAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: FinanceAddEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
