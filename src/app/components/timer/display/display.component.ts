import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  timeLeft: number = 0;
  interval: any;
  paused:boolean = false;
  changeEvent: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  getTimerData(data: number): void {
    if(this.timeLeft > 0) { //timer already started stage
      if(this.paused) { // timer paused stage
        this.paused = false;
        this.changeEvent = 'restarted';
        this.startTimer();
      } else { // timer running stage
        this.paused = true;
        this.changeEvent = 'paused';
        this.pauseTimer();
      }
    } else { // timer initial stage
      this.timeLeft = data;
      this.changeEvent = 'started';
      this.startTimer();
    }
  }


  startTimer() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.interval);
        }
      },1000)
    }
  
    pauseTimer() {
      clearInterval(this.interval);
    }

    resetTimer(data: number): void {
      this.changeEvent = 'reset';
      clearInterval(this.interval);
      this.pauseTimer();
      this.timeLeft = data;
    }

}
