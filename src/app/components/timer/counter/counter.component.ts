import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges {

  @Input() eventType: string = '';
  startedCounter: number = 0;
  resetCounter: number = 0;
  pauseCounter: number = 0;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const changedProp = changes[propName];
      const currentEvent = JSON.stringify(changedProp.currentValue);
      if (!changedProp.isFirstChange()) {     
       if(currentEvent == '"reset"') {
         this.resetCounter += 1;
       } else if (currentEvent == '"paused"') {
         this.pauseCounter += 1;
       } else if( currentEvent == '"started"' || currentEvent == '"restarted"'){
          this.startedCounter += 1;
       }
      }
    }
  }

}
