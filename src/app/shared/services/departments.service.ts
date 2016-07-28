import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DepartmentsService {
  // Observable string sources
  private selectedDepSource : Subject<string>;
  // Observable string streams
  selectedDep$: Observable<string>;
  constructor() {
		this.selectedDepSource = new Subject<string>();
  	this.selectedDep$ = this.selectedDepSource.asObservable();
  }
  // Service message commands
  setSelectedDep(depName: string) {
    this.selectedDepSource.next(depName);
  }
}