import {Component, Inject, OnInit } from '@angular/core';
import { Observable }   from 'rxjs/Rx';

import { NavButton } from '../shared/models/i-nav-button';
import { FluidButtonsComponent } from '../fluid-buttons/fluid-buttons.component';
import { AppRoutingService } from '../shared/services/app-routing.service';

@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
  directives: [ FluidButtonsComponent ]
})
export class NavigationComponent implements OnInit {
  private sections: NavButton[];
  private sectionsPerRow: number;
  private columnsPerSec: number;
  private sectionsLabels: string[];
  private selectedSection$: Observable<string>;

  constructor(
    @Inject('ROUTE_NAMES') private ROUTE_NAMES,
    private appRoutingService: AppRoutingService) {}

  ngOnInit() {
    this.sectionsPerRow = 2;
    this.columnsPerSec = 3;
    this.sectionsLabels = [];
    this.selectedSection$ = this.appRoutingService.currentUrlLevel1;
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
