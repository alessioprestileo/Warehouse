import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NgClass } from '@angular/common';
import { Observable }   from 'rxjs/Rx';

import { Department } from '../shared/models/department';
import { FluidButtonsComponent } from '../fluid-buttons/fluid-buttons.component';
import { ServerService } from '../shared/services/server.service';
import {AppRoutingService} from "../shared/services/app-routing.service";

@Component({
  moduleId: module.id,
	selector: 'app-departments',
	templateUrl: 'departments.component.html',
	styleUrls: ['departments.component.css'],
  providers: [ ServerService ],
	directives: [ROUTER_DIRECTIVES, NgClass, FluidButtonsComponent]
})

export class DepartmentsComponent implements OnInit {
  private depId$: Observable<string>;
  private title: string;
  private departments: Department[];
  private depsPerRow: number;
  private depsLabels: string[];

	constructor(
			private serverService: ServerService,
      private appRoutingService: AppRoutingService) {}

	ngOnInit() {
	  this.depId$ = this.appRoutingService.currentUrlLevel2;
	  this.depsPerRow = 3;
    this.getDeps().then(deps => {
      this.departments = deps;
      this.title = DepartmentsComponent.getTitle(deps);
      this.depsLabels = DepartmentsComponent.getLabels(deps);
    });
	}

	private getDeps() : Promise<Department[]> {
		return this.serverService.getDepartments();
	}
	private static getLabels(deps: Department[]) : string[] {
    let depsLabels: string[]  = [];
	  for (let i = 0; i < deps.length; i++) {
      depsLabels[i] = deps[i].name;
    }
    return depsLabels;
  }
	private static getTitle(deps: Department[]) : string {
	  let title: string;
    if (deps.length > 0) {
      title = "Explore our departments";
    } else {
      title = "No departments to show";
    }
    return title;
	}
  private onSelectedDep(depId: string) : void {
    let link: string[] = ['/Departments', depId];
    this.appRoutingService.navigate(link);
  }
}
