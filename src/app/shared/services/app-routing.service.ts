import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable }    from 'rxjs/Rx';
import { Router }    from '@angular/router';

@Injectable()
export class AppRoutingService {
  public currentUrl: BehaviorSubject<string>;
  public currentUrlLevel1: Observable<string>;
  public currentUrlLevel2: Observable<string>;
  public currentUrlLevel3: Observable<string>;

  constructor(
      public router: Router) {
  	this.currentUrl = new BehaviorSubject<string>('');
    this.currentUrlLevel1 = this.currentUrl.map(
      (url: string): string => {
        return url.split('/')[1];
      });
    this.currentUrlLevel2 = this.currentUrl.map(
      (url: string): string => {
        return url.split('/')[2];
      });
    this.currentUrlLevel3 = this.currentUrl.map(
      (url: string): string => {
        return url.split('/')[3];
      });
  }

  setCurrentUrl(url: string) {
    this.currentUrl.next(url);
  }
  navigate(link: string[]) : void {
    this.router.navigate(link);
    let url: string = link.join('/');
    this.setCurrentUrl(url);
  }
}
