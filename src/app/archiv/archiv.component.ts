import { Component, OnInit } from '@angular/core';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.css']
})
export class ArchivComponent implements OnInit {

  archiv : ArchivItem[] =[new ArchivItem("Röstung Nr. 1", [new Measurement(0,40),new Measurement(1,45)],
  3,"Leider beim Rösten eingeschlafen. Nächstes mal wirds besser", "Rote Bohne", new Date()),
  new ArchivItem("Röstung Nr. 2", [new Measurement(0,40),,new Measurement(0.5,70),new Measurement(50,45)],
  1,"Da ist etwas ordentlich schief gelaufen!", "Gartenbohne", new Date())]

  akArchivItem : ArchivItem = this.archiv[0]
  
  constructor() { }

  ngOnInit(): void {
  }
 setDetail(index : number){
   this.akArchivItem = this.archiv[index];
 }
}
