import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GridsterComponent } from "angular-gridster2";
import { GridComponent } from "./grid/grid.component";
import { PreviewComponent } from "./preview/preview.component";
import { SimpleDemoComponent } from "./simple-demo/simple-demo.component";

const routes: Routes = [
  {
    path: "preview",
    component: PreviewComponent,
  },
  {
    path: "grid",
    component: GridComponent,
  },
  {
    path: "gridster",
    component: GridsterComponent,
  },
  {
    path: "",
    component: SimpleDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
