import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { TemperatureService } from './temperature.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  time : number = 0;
  timerId : any; 
  subject = new Subject<number>();  
  
  constructor(private tempService : TemperatureService) {}
  
  startTimer(){
    this.tempService.startMeasure();
    this.time = 0;
    this.timerId = setInterval(() => this.increaseTimer(), 1000);
  }

  increaseTimer(){
    this.time++;
    this.subject.next(this.time)
  }

  stopTimer(){
    this.tempService.stopMeasure();
    clearInterval(this.timerId)
  }

  resetTimer(){
    this.time = 0;
    clearInterval(this.timerId)
    this.subject.next(this.time)
  }

  getTime() : Subject<number>{
    return this.subject;
  }
}
