import {Component, DoCheck, OnInit, OnDestroy, Inject} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'
import { Location }    from '@angular/common';
import { Observable, Subscription }   from 'rxjs/Rx';

import { NavButton } from './shared/models/i-nav-button';
import { FluidButtonsComponent } from './fluid-buttons/fluid-buttons.component';
import { AppRoutingService } from './shared/services/app-routing.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css', '../styles.css', '../forms.css', '../animate.css'],
  directives: [ROUTER_DIRECTIVES, FluidButtonsComponent],
  providers: [ AppRoutingService ]
})

export class AppComponent implements DoCheck, OnDestroy, OnInit {
  private title: string;
  private sections: NavButton[];
  private sectionsPerRow: number;
  private sectionsLabels: string[];
  private selectedSection$: Observable<string>;
  private subCurrentUrl: Subscription;
  private servicePath: string;
  private prevPath: string;

  constructor(
      @Inject('ROUTE_NAMES') private ROUTE_NAMES,
      private location: Location,
      private appRoutingService: AppRoutingService) {}

  ngOnInit() {
    this.sectionsPerRow = 2;
    this.sectionsLabels = [];
    this.subCurrentUrl = this.appRoutingService.currentUrl.subscribe(
      (url: string) => this.servicePath = url);
    this.selectedSection$ = this.appRoutingService.currentUrlLevel1;
    this.title = 'Alessio\'s warehouse';
    this.sections = [
      {
        label: 'Products',
        link: ['/' + this.ROUTE_NAMES.products + '/' + this.ROUTE_NAMES.all]
      },
      {
        label: 'Departments',
        link: ['/' + this.ROUTE_NAMES.departments + '/' + this.ROUTE_NAMES.all]
      },
    ];
    this.setSectionLabels();
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subCurrentUrl.unsubscribe();
  }
  ngDoCheck() {
    // ENABLE TIME TRAVEL
    let currentPath: string = this.location.path();
    if (currentPath && (currentPath !== this.prevPath)
        && (currentPath !== this.servicePath)) {
      this.prevPath = currentPath;
      let link: string[] = [currentPath];
      this.appRoutingService.navigate(link);
    }
  }

  private setSectionLabels() : void {
    let length: number  = this.sections.length;
    for (let i = 0; i < length; i++) {
      this.sectionsLabels[i] = this.sections[i].label;
    }
  }
  private onSelectedSection(sctnName: string) : void {
    let length: number  = this.sections.length;
    for (let i = 0; i < length; i++) {
      if (sctnName === this.sections[i].label) {
        let link: string[] = this.sections[i].link;
        this.appRoutingService.navigate(link);
        return;
      }
    }
  }
}
