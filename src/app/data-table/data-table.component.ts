import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DatePipe} from "@angular/common";
import {DataTableDirectives} from 'angular2-datatable/datatable';

@Component({
  selector: 'app-data-table',
  templateUrl: 'app/data-table/data-table.component.html',
  directives: [DataTableDirectives],
  pipes: [DatePipe]
})

export class DataTableComponent {
  @Input() headers: string[];
  @Input() items: any;
  @Output() editEmitter = new EventEmitter();
  @Output() removeEmitter = new EventEmitter();

  public getPropertyValue(object: any, propName: string) : any {
    let splitPropName = propName.split('.');
    let result: any;
    if (splitPropName.length === 1) {
      result = object[splitPropName[0]];
    }
    else if (splitPropName.length === 2) {
      result = object[splitPropName[0]][splitPropName[1]];
    }
    else {
      result = "Error: Can't get value";
    }
    result = (((typeof(result)).toLowerCase() === 'number')
             && propName.includes('price')) ? result.toFixed(2) : result;
    return result;
  }
  public editItem(item: any) : void {
    this.editEmitter.emit(item);
  }
  public removeItem(item: any) : void {
    this.removeEmitter.emit(item);
  }
}
