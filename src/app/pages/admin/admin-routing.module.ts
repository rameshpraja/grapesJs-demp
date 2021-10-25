import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "purchase",
        loadChildren: () =>
          import("./purchase/purchase.module").then((m) => m.ExpenseModule),
      },
      {
        path: "reports",
        loadChildren: () =>
          import("./reports/reports.module").then((m) => m.ReportsModule),
      },
      {
        path: "supplier",
        loadChildren: () =>
          import("./supplier/supplier.module").then((m) => m.SupplierModule),
      },
      {
        path: "product",
        loadChildren: () =>
          import("./products/products.module").then((m) => m.ProductsModule),
      },
      {
        path: "finance",
        loadChildren: () =>
          import("./finance/finance.module").then((m) => m.FinanceModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
