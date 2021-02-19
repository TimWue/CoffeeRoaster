import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Measurement } from '../models/measurement';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private websocketService: WebsocketService) {
    this.subject.next({time : 0, temperature : 0})
  }

  startDate : number;
  akGradient  = new Subject<number>();
  temperature : number = 0;
  intId : any; 
  subject = new Subject<{time : number, temperature : number}>();
  statusUpdate = new Subject<string>();
  measures : Measurement[] = [];
  tempSubscription : Subscription; //https://stackoverflow.com/questions/43447775/objectunsubscribederror-object-unsubscribed-error-when-i-am-using-ngx-progress
  
  
  startMeasure(){
    this.startDate = Date.now(); 
    this.temperature = 0;
    this.tempSubscription = this.websocketService.msg.subscribe((msg : number) => {
      this.pushTemperatureMeasurement(msg)
    })

    //this.intId = setInterval(() => {this.calcTemperature(); this.calcGradient()}, 1000);
  }

  stopMeasure(){
    this.tempSubscription.unsubscribe();
    //clearInterval(this.intId)
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  pushTemperatureMeasurement(temp : number){
    let akTime = Date.now() - this.startDate;
    this.subject.next({time : akTime/1000, temperature : temp})

  }

  calcTemperature(){
    let temp = this.getRandomArbitrary(20, 300);

    let akTime = Date.now() - this.startDate;
    this.subject.next({time : akTime/1000, temperature : temp})
    this.measures.push(new Measurement(akTime/1000,temp))
  }

  resetTemperature(){
   // clearInterval(this.intId)
    this.tempSubscription.unsubscribe();

    this.statusUpdate.next("reset")
    this.measures = [];
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