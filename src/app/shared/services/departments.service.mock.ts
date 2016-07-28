import {Observable} from 'rxjs/Observable';

export class DepartmentsServiceMock {
  // Observable string streams
  selectedDep$: Observable<string>;
  constructor() {
  	this.selectedDep$ = new Observable<string>((observer:any) => {
	        observer.next('Fashion');
	});
  }
  // Service message commands
  setSelectedDep(depName: string) {}
}