import { Injectable } from '@angular/core';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';
import { ArchivService } from './archiv.service';
import { TemperatureService } from './temperature.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  comments = "";
  rating = 0;
  name = "";
  bean = "";
  timestamp : Date;
  data : Measurement[] = [];

  constructor(private archivService : ArchivService,
    private tempService : TemperatureService) { }

  resetMeasurement(){
    this.comments = "";
    this.rating = 0;
    this.name = "";
    this.bean = "";
    this.data  = [];
  }

  addMeasurement(){
    this.timestamp = new Date();
    this.data = this.tempService.measures;
    
    let archivItem = new ArchivItem(this.name, 
      this.data, this.rating, this.comments, this.bean, this.timestamp);
    this.archivService.addItem(archivItem)
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
