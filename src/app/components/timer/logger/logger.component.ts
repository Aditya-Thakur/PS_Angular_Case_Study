import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnChanges {

  @Input() eventType: string = '';

  timerLog: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const changedProp = changes[propName];
      const currentEvent = JSON.stringify(changedProp.currentValue);
      if (!changedProp.isFirstChange()) {
        this.timerLog.push('Timer ' + currentEvent + ' at ' + new Date().toLocaleString() );
      }
    }
  }

}
