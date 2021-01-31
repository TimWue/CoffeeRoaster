import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';

@Injectable({
  providedIn: 'root'
})
export class ArchivService {
  public measurementList : ArchivItem[] = [new ArchivItem("Röstung Nr. 1", [new Measurement(0,40),,new Measurement(600,150),new Measurement(1200,345)],
  3,"Leider beim Rösten eingeschlafen. Nächstes mal wirds besser", "Rote Bohne", new Date()),
  new ArchivItem("Röstung Nr. 2", [new Measurement(0,40),,new Measurement(600,70),new Measurement(1200,45)],
  1,"Da ist etwas ordentlich schief gelaufen!", "Gartenbohne", new Date())];

  public currenItem : ArchivItem;
  public toShowItemSubject = new Subject<ArchivItem>();

  constructor() { }

  addItem(item: ArchivItem){
    this.measurementList.push(item);
  }

  removeItem(item: ArchivItem){
    const index: number = this.measurementList.indexOf(item);
    if (index !== -1) {
        this.measurementList.splice(index, 1);
    }       
  }

  setToShowItem(archivItem : ArchivItem){
    this.toShowItemSubject.next(archivItem);
  }
}
