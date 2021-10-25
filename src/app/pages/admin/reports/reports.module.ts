import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { SkuMonthlyComponent } from "./sku-monthly/sku-monthly.component";
import { OverallMonthlyComponent } from "./overall-monthly/overall-monthly.component";
import { UnSettlementComponent } from "./un-settlement/un-settlement.component";
import { OrderWiseComponent } from "./order-wise/order-wise.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    SkuMonthlyComponent,
    OrderWiseComponent,
    OverallMonthlyComponent,
    UnSettlementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReportsRoutingModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class ReportsModule {}
