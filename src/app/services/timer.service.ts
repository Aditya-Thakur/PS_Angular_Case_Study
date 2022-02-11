import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private subject = new Subject<any>();

  sendTimerData(message: number) {
    this.subject.next({ number: message})
  }

  clearMessages() {
      this.subject.next(null);
  }

  getTimerData(): Observable<any> {
      return this.subject.asObservable();
  }
}
