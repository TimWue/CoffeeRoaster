import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Measurement } from '../models/measurement';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() {
    this.subject.next({time : 0, temperature : 0})
  }

  startDate : number;
  akGradient  = new Subject<number>();
  temperature : number = 0;
  intId : any; 
  subject = new Subject<{time : number, temperature : number}>();
  statusUpdate = new Subject<string>();
  measures : Measurement[] = [];
  
  
  
  startMeasure(){
    this.startDate = Date.now() 
    this.temperature = 0;
    this.intId = setInterval(() => {this.calcTemperature(); this.calcGradient()}, 1000);
  }

  stopMeasure(){
    clearInterval(this.intId)
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  calcTemperature(){
    let temp = this.getRandomArbitrary(20, 300)
    let akTime = Date.now() - this.startDate;
    this.subject.next({time : akTime/1000, temperature : temp})
    this.measures.push(new Measurement(akTime/1000,temp))
  }

  resetTemperature(){
    clearInterval(this.intId)
    this.statusUpdate.next("reset")
    // this.subject.next({time : 0, temperature : 0})

  }


  
  getTemperature() : Subject<{time : number, temperature : number}>{
    return this.subject;
  }

  calcGradient(){
    let mlen = this.measures.length-1; 
    // console.log(this.measures[mlen]);
    if (mlen > 2){
      this.akGradient.next((this.measures[mlen].temperature - this.measures[mlen-1].temperature)/
      (this.measures[mlen].time - this.measures[mlen-1].time)) 
    }

  }
}