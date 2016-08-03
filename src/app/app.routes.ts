import { provideRouter, RouterConfig }  from '@angular/router';

import { DepartmentsComponent } from './departments/departments.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import * as ROUTES_LABELS from './app.route-labels'

export const ROUTES_DICT: {[name: string] : string} = {
  all: ROUTES_LABELS.ALL,
  departments: ROUTES_LABELS.DEPARTMENTS,
  detail: ROUTES_LABELS.DETAIL,
  new: ROUTES_LABELS.NEW,
  products: ROUTES_LABELS.PRODUCTS
  }


export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: ROUTES_LABELS.DEPARTMENTS + '/' + ROUTES_LABELS.ALL,
    pathMatch: 'full'
  },
  {
    path: ROUTES_LABELS.DEPARTMENTS,
    component: DepartmentsComponent,
    children: [
      {
        path: ROUTES_LABELS.ALL
      },
      {
        path: ':depId',
        component: ProductsComponent
      }
    ]
  },
  {
    path: ROUTES_LABELS.PRODUCTS + '/' + ROUTES_LABELS.ALL,
    component: ProductsComponent,
  },
  {
    path: ROUTES_LABELS.PRODUCTS + '/' + ROUTES_LABELS.DETAIL + '/' +  ':prodId',
    component: ProductDetailComponent,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
