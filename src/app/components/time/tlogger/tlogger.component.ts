import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-tlogger',
  templateUrl: './tlogger.component.html',
  styleUrls: ['./tlogger.component.css']
})
export class TloggerComponent implements OnInit {

subscription: Subscription;

  timerLog: string[] = [];

  constructor(private messageService: MessageService) { 
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {        
        this.setData(message.text);
      }
    });
  }

  setData(currentEvent: string) {
    this.timerLog.push('Timer ' + currentEvent + ' at ' + new Date().toLocaleString() );
  }

  ngOnInit(): void {
      
  }
}
