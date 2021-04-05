import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Measurement } from '../models/measurement';
import { MultipleMeasurement } from '../models/multipleMeasurement';
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
  measures : MultipleMeasurement[] = [new MultipleMeasurement([]), new MultipleMeasurement([]), new MultipleMeasurement([])];
  tempSubscription : Subscription; //https://stackoverflow.com/questions/43447775/objectunsubscribederror-object-unsubscribed-error-when-i-am-using-ngx-progress
  measurement = new Subject<SensorMessage>();
  
  startMeasure(){
    this.startDate = Date.now(); 
    this.temperature = 0;
    this.tempSubscription = this.websocketService.msg.subscribe((msg : string) => {
      let message : SensorMessage[] = JSON.parse(msg); 
      this.pushTemperatureMeasurement(message);
      this.calcGradient();
    })

  }

  stopMeasure(){
    this.tempSubscription.unsubscribe();
  }


  pushTemperatureMeasurement(sensorMessages : SensorMessage[]){
    
    sensorMessages.forEach(sensorMessage => {
      let akTime = Date.now() - this.startDate;
      sensorMessage.time =  akTime/1000;
      this.measurement.next(sensorMessage);

      if (sensorMessage.sensorName === "sensor1"){ // We need do do this for the other sensors as well
        this.measures[0].measurements.push(new Measurement(sensorMessage.time,sensorMessage.value))
        this.calcGradient()
        //this.measures[0].push(new Measurement(sensorMessage.time,sensorMessage.value))
      } else if (sensorMessage.sensorName === "sensor2"){ // We need do do this for the other sensors as well
        this.measures[1].measurements.push(new Measurement(sensorMessage.time,sensorMessage.value))
      } else if (sensorMessage.sensorName === "sensor3"){ // We need do do this for the other sensors as well
        this.measures[2].measurements.push(new Measurement(sensorMessage.time,sensorMessage.value))
      }

      //this.calcGradient()
    });

    

    /*
    this.subject.next({time : akTime/1000, temperature : temp});
    this.measures.push(new Measurement(akTime/1000,temp))
    */

  }

  resetTemperature(){
    this.tempSubscription.unsubscribe();

    this.statusUpdate.next("reset")
    this.measures = [new MultipleMeasurement([]), new MultipleMeasurement([]), new MultipleMeasurement([])];
  }
  
  /*
  getTemperature() : Subject<{time : number, temperature : number}>{
    return this.subject;
  }
  */

  calcGradient(){
    //console.log("Calculating gradient ...")
    // For all three sensors? Now, we do it only for the first one
    let mlen = this.measures[0].measurements.length-1 

    if (mlen > 2){
      //console.log(this.measures[0].measurements[mlen].temperature)

      this.akGradient.next((this.measures[0].measurements[mlen].temperature - this.measures[0].measurements[mlen-1].temperature)/
      (this.measures[0].measurements[mlen].time - this.measures[0].measurements[mlen-1].time)) 
    }

  }
}