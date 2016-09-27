// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular': 'vendor/@angular',
  'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',
  'angular2-datatable': 'vendor/angular2-datatable',
  'bootstrap': 'vendor/bootstrap',
  'chart.js': 'vendor/show-chart.js',
  'jquery': 'vendor/jquery',
  'lodash': 'vendor/lodash',
  'ng2-charts': 'vendor/ng2-charts',
  'rxjs': 'vendor/rxjs',
  'slick-carousel': 'vendor/slick-carousel',
  'typeahead.js': 'vendor/typeahead.js',
  'main': 'main.js'
};

/** User packages configuration. */
const packages: any = {
  '@angular/core' : {main: 'bundles/core.umd.min.js'},
  '@angular/common' : {main: 'bundles/common.umd.min.js'},
  '@angular/compiler' : {main: 'bundles/compiler.umd.min.js'},
  '@angular/forms' : {main: 'bundles/forms.umd.min.js'},
  '@angular/http' : {main: 'bundles/http.umd.min.js'},
  '@angular/platform-browser' : {main: 'bundles/platform-browser.umd.min.js'},
  '@angular/platform-browser-dynamic': {main: 'bundles/platform-browser-dynamic.umd.min.js'},
  '@angular/router' : {main: 'bundles/router.umd.min.js'},
  // Thirdparty packages
  'angular2-datatable': {main: 'index'},
  'angular2-in-memory-web-api': {main: 'index'},
  'bootstrap': {main: 'index'},
  'chart.js': {main: 'index'},
  'jquery': {main: 'index'},
  'lodash': {main: 'index'},
  'ng2-charts': {main: 'index'},
  'rxjs': {main: 'index'},
  'slick-carousel': {main: 'index'},
  'typeahead.js': {main: 'index'},
  // App specific barrels.
  'app': {main: 'index'},
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/

/** Type declaration for ambient System. */
declare var System: any;

// Apply the configuration.
System.config({ map, packages });
