import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";
import { LimitToPipe } from "./pipe/limit.pipe";

@NgModule({
  declarations: [LoaderComponent, LimitToPipe],
  imports: [CommonModule],
  exports: [LoaderComponent, LimitToPipe],
})
export class CoreModule {}
