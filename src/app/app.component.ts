import {
  AfterViewChecked, Component, DoCheck, EventEmitter, Inject, OnInit, OnDestroy,
  HostListener,
} from '@angular/core';
import { Location }    from '@angular/common';

import { Subscription }   from 'rxjs/Rx';

import { AppRoutingService } from './shared/services/app-routing.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent
implements AfterViewChecked, DoCheck, OnDestroy, OnInit {
  @HostListener('window:resize', ['$event'])
  private onResize(event: any) {
    this.onResizeEmitter.emit();
  }
  private currentUrl: string;
  private onResizeEmitter: EventEmitter<any> = new EventEmitter();
  private prevBrowserPath: string;
  private siteMapInput: any[];
  private subCurrentUrl: Subscription;
  private subOnResize: Subscription;
  private title: string;

  constructor(@Inject('ROUTES_DICT') private ROUTES_DICT,
              private location: Location,
              private appRoutingService: AppRoutingService) {
  }
  ngOnInit() {
    this.subOnResize = this.onResizeEmitter.subscribe(() => this.setBodyHeight());
    this.title = 'Alessio\'s Warehouse';
    this.subCurrentUrl = this.appRoutingService.currentUrl.subscribe(
      (url: string) : void => {
        this.currentUrl = url;
        this.setSiteMapInput(url);
      });
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.cancelSubs();
  }
  ngAfterViewChecked() {
    // Call setBodyHeight to get changes in header or footer size
    this.setBodyHeight();
  }
  ngDoCheck() {
    // Perform checks for time travel
    this.checkTimeTravel();
    // Perform checks for route re-direct
    this.checkRouteReDirect();
  }

  private cancelSubs() : void {
    this.subCurrentUrl.unsubscribe();
    this.subOnResize.unsubscribe();
  }
  private checkRouteReDirect() : void {
    let browserPath: string = this.location.path();
    if ((browserPath) && (browserPath === this.prevBrowserPath)) {
      if (browserPath !== this.currentUrl) {
        this.appRoutingService.navigate([browserPath]);
      }
    }
  }
  private checkTimeTravel() : void {
    let browserPath: string = this.location.path();
    if ((browserPath) && (browserPath !== this.prevBrowserPath)) {
      this.prevBrowserPath = browserPath;
      if (browserPath !== this.currentUrl) {
        let link:string[] = [browserPath];
        this.appRoutingService.navigate(link);
      }
    }
  }
  public onHomeButtonClicked() : void {
    this.appRoutingService.navigate([
      '/' + this.ROUTES_DICT.DEPARTMENTS
    ]);
  }
  public onSiteMapClick(link: string[]) : void {
    this.appRoutingService.navigate(link);
  }
  private setBodyHeight() : void {
    let header: HTMLElement;
    let headerHeight: number;
    let footerHeight: number;
    let routerOutlet: HTMLElement;
    let body: HTMLElement;
    header = document.getElementById("app-header");
    headerHeight = document.getElementById("app-header").clientHeight;
    footerHeight = document.getElementById("app-footer").clientHeight;
    body = document.getElementById("app-body");
    body.style.height = 0.97 * window.innerHeight - headerHeight -
                                footerHeight + 'px';
    routerOutlet = document.getElementById("app-router-outlet");
    routerOutlet.style.height = body.style.height;
  }
  private setSiteMapInput(currentUrl: string) : void {
    let labels: string[] = [];
    let links: string[][] = [[]];
    let parentLink: string[] = [''];
    let splitUrl: string[] = currentUrl.split('/').splice(1);
    let urlLength: number = splitUrl.length;
    for (let i = 0; i < urlLength; i++) {
      let link: string[] = [parentLink[0] + '/' + splitUrl[i]];
      parentLink[0] = link[0];
      links[i] = link;
      labels[i] = splitUrl[i].replace(/[_]+/g, ' ');
    }
    this.siteMapInput = [labels, links];
  }
}
