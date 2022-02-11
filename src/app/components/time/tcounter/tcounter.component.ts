import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-tcounter',
  templateUrl: './tcounter.component.html',
  styleUrls: ['./tcounter.component.css']
})
export class TcounterComponent implements OnInit {

  startedCounter: number = 0;
  resetCounter: number = 0;
  pauseCounter: number = 0;
  subscription: Subscription;
  
  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {        
        this.displayLogs(message.text);
      }
    });
   }

  ngOnInit(): void {  }

  displayLogs(currentEvent: string) {
    if(currentEvent == 'reset') {
      this.resetCounter += 1;
    } else if (currentEvent == 'paused') {
      this.pauseCounter += 1;
    } else if( currentEvent == 'started' || currentEvent == 'restarted'){
       this.startedCounter += 1;
    }
  }

}
