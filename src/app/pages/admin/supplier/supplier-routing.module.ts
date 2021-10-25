import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplierAddEditComponent } from "./supplier-add-edit/supplier-add-edit.component";
import { SupplierListComponent } from "./supplier-list/supplier-list.component";

const routes: Routes = [
  {
    path: "list",
    component: SupplierListComponent,
  },
  {
    path: "add",
    component: SupplierAddEditComponent,
  },
  {
    path: "edit/:id",
    component: SupplierAddEditComponent,
  },
  {
    path: "",
    redirectTo: "/admin/supplier/list",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
