import { Component, OnInit } from '@angular/core';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';
import { ArchivService } from '../services/archiv.service';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.css']
})
export class ArchivComponent implements OnInit {

  archivList : ArchivItem[] = this.archivService.measurementList;
  currentItem : ArchivItem = this.archivList[0]
  
  constructor(private archivService: ArchivService) { }

  ngOnInit(): void {
  }
 setDetail(index : number){
   this.currentItem = this.archivList[index];
 }
}
