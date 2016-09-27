import { NgModule }           from '@angular/core';

import { CarouselComponent } from "./carousel.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ],
  providers: [ ]
})
export class CarouselModule { }
