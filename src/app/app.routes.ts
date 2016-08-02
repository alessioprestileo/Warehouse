import { provideRouter, RouterConfig }  from '@angular/router';

import { DepartmentsComponent } from './departments/departments.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const ROUTE_NAMES: {[name: string] : string} = {
  all: 'All',
  departments: 'Departments',
  detail: 'Detail',
  new: 'New',
  products: 'Products'
  }

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'Departments/All',
    pathMatch: 'full'
  },
  {
    path: 'Departments',
    component: DepartmentsComponent,
    children: [
      {
        path: 'All'
      },
      {
        path: ':depId',
        component: ProductsComponent
      }
    ]
  },
  {
    path: 'Products/All',
    component: ProductsComponent,
  },
  {
    path: 'Products/Detail/:prodId',
    component: ProductDetailComponent,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
