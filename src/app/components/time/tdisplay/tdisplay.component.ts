import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-tdisplay',
  templateUrl: './tdisplay.component.html',
  styleUrls: ['./tdisplay.component.css']
})
export class TdisplayComponent implements OnInit, OnDestroy {

  timeLeft: number = 0;
  interval: any;
  paused:boolean = false;
  subscription: Subscription;

  constructor(private messageService: MessageService, private timerService: TimerService) {
      this.subscription = this.timerService.getTimerData().subscribe(message => {
        if (message) {        
          this.setTimerData(message.number);
        } else {
          this.resetTimer(0);
        }
      });
  }

  ngOnInit(): void {
  }

  setTimerData(data: number): void {
    if(this.timeLeft > 0) { //timer already started stage
      if(this.paused) { // timer paused stage
        this.paused = false;
        this.messageService.sendTextMessage('restarted');
        this.startTimer();
      } else { // timer running stage
        this.paused = true;
        this.messageService.sendTextMessage('paused');
        this.pauseTimer();
      }
    } else { // timer initial stage
      this.timeLeft = data;
      this.messageService.sendTextMessage('started');
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
      this.messageService.sendTextMessage('reset');
      clearInterval(this.interval);
      this.pauseTimer();
      this.timeLeft = data;
    }

    ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
