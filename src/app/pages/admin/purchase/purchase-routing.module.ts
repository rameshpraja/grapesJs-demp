import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseDetailComponent } from "./purchase-detail/purchase-detail.component";
import { PurchaseAddEditComponent } from "./purchase-add-edit/purchase-add-edit.component";
import { PurchaseListComponent } from "./purchase-list/purchase-list.component";

const routes: Routes = [
  {
    path: "list",
    component: PurchaseListComponent,
  },
  {
    path: "add",
    component: PurchaseAddEditComponent,
  },
  {
    path: "edit/:id",
    component: PurchaseAddEditComponent,
  },
  {
    path: "details/:id",
    component: PurchaseDetailComponent,
  },
  {
    path: "",
    redirectTo: "/admin/purchase/list",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule { }
