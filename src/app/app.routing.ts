import { Routes, RouterModule } from '@angular/router';

import * as ROUTING_LABELS from './app.routing-labels'

import { DepartmentsComponent } from './routes/departments/departments.component';
import { ProductsComponent } from './routes/products/products.component';
import { ProductDetailComponent } from './routes/product-detail/product-detail.component';

export const ROUTES_DICT: {[name: string] : string} = {
  CHARTS: ROUTING_LABELS.CHARTS,
  CHARTS_DETAIL: ROUTING_LABELS.CHART_DETAIL,
  COLLECTIONS_DETAIL: ROUTING_LABELS.COLLECTION_DETAIL,
  DEPARTMENTS: ROUTING_LABELS.DEPARTMENTS,
  DEPARTMENTS_DETAIL: ROUTING_LABELS.DEPARTMENT_DETAIL,
  DASHBOARD: ROUTING_LABELS.DASHBOARD,
  HOME: ROUTING_LABELS.HOME,
  LAB: ROUTING_LABELS.LAB,
  MY_CV: ROUTING_LABELS.MY_CV,
  NEW_CHART: ROUTING_LABELS.NEW_CHART,
  PRODUCTS: ROUTING_LABELS.PRODUCTS,
  PRODUCTS_DETAIL: ROUTING_LABELS.PRODUCT_DETAIL,
  PROJECTS: ROUTING_LABELS.PROJECTS,
  SAMPLES: ROUTING_LABELS.SAMPLES,
  WAREHOUSE: ROUTING_LABELS.WAREHOUSE,
  WHO_AM_I: ROUTING_LABELS.WHO_AM_I,
  };

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: ROUTING_LABELS.DEPARTMENTS,
    pathMatch: 'full',
  },
  {
    path: ROUTING_LABELS.DEPARTMENTS,
    component: DepartmentsComponent
  },
  {
    path: ROUTING_LABELS.DEPARTMENT_DETAIL,
    redirectTo: ROUTING_LABELS.DEPARTMENTS,
    pathMatch: 'full'
  },
  {
    path:
      ROUTING_LABELS.DEPARTMENT_DETAIL +
      '/' + ':depPath',
    component: ProductsComponent
  },
  {
    path: ROUTING_LABELS.PRODUCTS,
    component: ProductsComponent,
  },
  {
    path: ROUTING_LABELS.PRODUCT_DETAIL,
    children: [
      {
        path: 'New',
        component: ProductDetailComponent,
      },
      {
        path: ':prodId',
        component: ProductDetailComponent,
      }
    ]
  }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
