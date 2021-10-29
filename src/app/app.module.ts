import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpleDemoComponent } from "./simple-demo/simple-demo.component";
import { PreviewComponent } from "./preview/preview.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridsterModule } from "angular-gridster2";
import { GridComponent } from "./grid/grid.component";
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDemoComponent,
    PreviewComponent,
    GridComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GridsterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
