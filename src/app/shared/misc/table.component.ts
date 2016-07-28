import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: 'app/components/table.component.html',
})

export class TableComponent {
  @Input() headers: string[];
  @Input() items: any;
  @Output() editEmitter = new EventEmitter();
  @Output() removeEmitter = new EventEmitter();
  constructor() {
  
  }
  private editItem(id: any) {
    this.editEmitter.emit(id);
  }
  private removeItem(item: any) {
    this.removeEmitter.emit(item);
  }
}