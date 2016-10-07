// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryData }               	 from './shared/utils/in-memory-data';

// Angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

// App imports
import { AppComponent }  from './app.component';
import { AppRoutingService } from './shared/services/app-routing.service';
import { DepartmentDetailModule } from './routes/department-detail/department-detail.module'
import { DepartmentsModule } from "./routes/departments/departments.module";
import { NavigationModule } from "./shared/navigation/navigation.module";
import { ProductDetailModule } from "./routes/product-detail/product-detail.module";
import { ProductsModule } from "./routes/products/products.module";
import { ROUTING, ROUTES_DICT }        from './app.routing';
import { SiteMapModule } from "./shared/site-map/site-map.module";
import { WarehouseNavModule } from "./warehouse-nav/warehouse-nav.module";
import { WarehouseService } from './shared/services/warehouse.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,

    DepartmentsModule,
    DepartmentDetailModule,
    NavigationModule,
    ProductsModule,
    ProductDetailModule,
    SiteMapModule,
    WarehouseNavModule,
    ROUTING
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AppRoutingService,
    WarehouseService,
    {provide: 'ROUTES_DICT', useValue: ROUTES_DICT},
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryData }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
