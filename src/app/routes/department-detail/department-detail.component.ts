import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-department-detail',
  templateUrl: 'department-detail.component.html',
  styleUrls: ['department-detail.component.css'],

})

export class DepartmentDetailComponent
implements DoCheck, OnDestroy, OnInit {

  constructor() {
  }

  ngOnInit() {
    this.setDarkBackground();
  }

  ngOnDestroy() {
    this.removeDarkBackground();
  }
  ngDoCheck() {
  }

  private removeDarkBackground() {
    jQuery("#app-router-outlet").addClass("backgroundLight");
    jQuery("#app-router-outlet").removeClass("backgroundDark");
  }
  private setDarkBackground() {
    jQuery("#app-router-outlet").addClass("backgroundDark");
    jQuery("#app-router-outlet").removeClass("backgroundLight");
  }
}
