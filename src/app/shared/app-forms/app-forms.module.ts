import { NgModule }           from '@angular/core';

import { InputBoxModule } from "./input-box/input-box.module";
import { SearchBoxModule } from "./search-box/search-box.module";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  imports:      [ InputBoxModule, SearchBoxModule,
                  SharedModule ],
  declarations: [ ],
  exports:      [ InputBoxModule, SearchBoxModule ],
  providers:    [ ]
})
export class AppFormsModule { }
