import { TempMQTTService } from './temp-mqtt.service';
import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Measurement } from '../models/measurement';
import { MultipleMeasurement } from '../models/multipleMeasurement';
import { SensorMessage } from '../models/sensorMessage';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private tempMQTTService : TempMQTTService) {
  }

  startDate : number; // for time relative to start
  statusUpdate = new Subject<string>();
  measures : MultipleMeasurement[] = [new MultipleMeasurement([]),
                                      new MultipleMeasurement([]),
                                      new MultipleMeasurement([])]; // for saving roasting
  tempSubscription : Subscription;
  sensorTempSubject = [new Subject<SensorMessage>(), new Subject<SensorMessage>(), new Subject<SensorMessage>()]
  sensorGradSubject = [new Subject<number>(), new Subject<number>(), new Subject<number>()]


  startMeasure(){
    this.startDate = Date.now();
    this.tempSubscription = this.tempMQTTService.topic('tempSensor')
    .subscribe((data: any) => {
        let item : SensorMessage= JSON.parse(data.payload.toString());
        this.processMeasure(item);
      });
  }

  stopMeasure(){
    this.tempSubscription.unsubscribe();
  }

  resetMeasure(){
    this.tempSubscription.unsubscribe();
    this.statusUpdate.next("reset")
    this.measures = [new MultipleMeasurement([]), new MultipleMeasurement([]), new MultipleMeasurement([])];
  }

  processMeasure(sensorMessage : SensorMessage){
      let akTime = Date.now() - this.startDate;
      sensorMessage.time =  akTime/1000;

      if (sensorMessage.sensorName === "sensor1"){ // We need do do this for the other sensors as well
        this.measures[0].measurements.push(new Measurement(sensorMessage.time,sensorMessage.value))
        this.sensorTempSubject[0].next(sensorMessage);
        this.calcGradient(0)
      } else if (sensorMessage.sensorName === "sensor2"){ // We need do do this for the other sensors as well
        this.measures[1].measurements.push(new Measurement(sensorMessage.time,sensorMessage.value))
        this.sensorTempSubject[1].next(sensorMessage);
        this.calcGradient(1)
      } else if (sensorMessage.sensorName === "sensor3"){ // We need do do this for the other sensors as well
        this.measures[2].measurements.push(new Measurement(sensorMessage.time,sensorMessage.value))
        this.sensorTempSubject[2].next(sensorMessage);
        this.calcGradient(2)
      }
  }

  calcGradient(ind : number){
    let mlen = this.measures[ind].measurements.length-1
    if (mlen > 2){
      this.sensorGradSubject[ind].next((this.measures[ind].measurements[mlen].temperature - this.measures[ind].measurements[mlen-1].temperature)/
      (this.measures[ind].measurements[mlen].time - this.measures[ind].measurements[mlen-1].time))
    }
  }
}
