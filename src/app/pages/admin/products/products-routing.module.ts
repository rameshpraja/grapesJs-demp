import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddEditComponent } from "./product-add-edit/product-add-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";
const routes: Routes = [
  {
    path: "list",
    component: ProductListComponent,
  },
  {
    path: "add",
    component: ProductAddEditComponent,
  },
  {
    path: "edit/:id",
    component: ProductAddEditComponent,
  },
  {
    path: "",
    redirectTo: "/admin/product/list",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
