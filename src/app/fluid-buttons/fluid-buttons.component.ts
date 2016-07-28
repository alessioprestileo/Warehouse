import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import {Observable, Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-fluid-buttons',
  templateUrl: 'fluid-buttons.component.html',
  styleUrls: ['fluid-buttons.component.css']
})
export class FluidButtonsComponent implements OnInit {
  @Input() inLabels: string[];
  @Input() btnsPerRow: number;
  @Input() inSelectedLabel: Observable<string>;
  @Output() selectedEmitter = new EventEmitter();

  private labels : Array<string[]>;
  private columnsClass: string;
  private subSelectedLabel: Subscription;
  private selectedLabel: string;

  constructor() {}

  ngOnInit() {
    this.columnsClass = 'col-sm-' + 12/this.btnsPerRow;
    this.labels = this.arrangeBtns(this.inLabels);
    this.subSelectedLabel = this.inSelectedLabel.subscribe(
      (selection: string) => this.selectedLabel = selection);

  }
  ngOnDestroy() {
    this.subSelectedLabel.unsubscribe();
  }

  private arrangeBtns(inLabels: string[]) : Array<string[]> {
    let btnsNum = inLabels.length;
    let rowsNum = Math.ceil(btnsNum / this.btnsPerRow);
    let labels = new Array<string[]>(rowsNum);
    for (let i = 0; i < rowsNum; i++) {
      let start = this.btnsPerRow * i;
      labels[i] = inLabels.slice(start, start + this.btnsPerRow);
    }
    return labels;
  }
  private onSelected(label: string) : void {
    this.selectedEmitter.emit(label);
  }
}
