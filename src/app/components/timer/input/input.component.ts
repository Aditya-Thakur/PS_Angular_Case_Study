import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  timeInSec: number = 0;
  @Output() newTimerEvent = new EventEmitter<any>();
  @Output() newResetEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  startTimer(): void {   
    this.newTimerEvent.emit(this.timeInSec)
  }

  resetTimer(): void {
    this.timeInSec = 0;
    this.newResetEvent.emit(this.timeInSec);
  }

}
