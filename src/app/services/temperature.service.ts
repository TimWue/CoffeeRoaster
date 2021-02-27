import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Measurement } from '../models/measurement';
import { SensorMessage } from '../models/sensorMessage';
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
    this.tempSubscription = this.websocketService.msg.subscribe((msg : string) => {
      let message : SensorMessage[] = JSON.parse(msg); 
      this.pushTemperatureMeasurement(message[0].value);
      this.calcGradient();
    })

  }

  stopMeasure(){
    this.tempSubscription.unsubscribe();
  }


  pushTemperatureMeasurement(temp : number){
    let akTime = Date.now() - this.startDate;
    this.subject.next({time : akTime/1000, temperature : temp});
    this.measures.push(new Measurement(akTime/1000,temp))


  }

  resetTemperature(){
    this.tempSubscription.unsubscribe();

    this.statusUpdate.next("reset")
    this.measures = [];
  }
  
  getTemperature() : Subject<{time : number, temperature : number}>{
    return this.subject;
  }

  calcGradient(){
    let mlen = this.measures.length-1; 
    if (mlen > 2){
      this.akGradient.next((this.measures[mlen].temperature - this.measures[mlen-1].temperature)/
      (this.measures[mlen].time - this.measures[mlen-1].time)) 
    }

  }
}