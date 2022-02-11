import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-tinput',
  templateUrl: './tinput.component.html',
  styleUrls: ['./tinput.component.css']
})
export class TinputComponent implements OnInit {

  timeInSec: number = 0;
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  startTimer(): void {   
     this.timerService.sendTimerData(this.timeInSec);
  }

  resetTimer(): void {
    this.timeInSec = 0;
    // clear messages
    this.timerService.clearMessages();
  }

}
