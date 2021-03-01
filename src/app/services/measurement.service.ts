import { Injectable } from '@angular/core';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';
import { MultipleMeasurement } from '../models/multipleMeasurement';
import { ArchivService } from './archiv.service';
import { TemperatureService } from './temperature.service';

// Wird nicht mehr gebraucht wenn backend funktioniert

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  comments = "";
  rating = 0;
  name = "";
  bean = "";
  timestamp : Date;
  data : MultipleMeasurement[];

  constructor(private archivService : ArchivService,
    private tempService : TemperatureService) { }

  resetMeasurement(){
    this.comments = "";
    this.rating = 0;
    this.name = "";
    this.bean = "";
    this.data = null;
  }

  addMeasurement(){
    this.timestamp = new Date();
    this.data = this.tempService.measures;
    /*
    let archivItem = new ArchivItem(this.name, 
      this.data, this.rating, this.comments, this.bean, this.timestamp);
    this.archivService.addItem(archivItem)*/
  }

  setComments(comment : string){
    this.comments = comment;
  }

  setRating(rating : number){
    this.rating = rating;
  }

  setName(name : string){
    this.name = name;
  }

  setBean(bean : string){
    this.bean = bean;
  }

}
