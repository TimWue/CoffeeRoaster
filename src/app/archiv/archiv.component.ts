import { Component, OnInit } from '@angular/core';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.css']
})
export class ArchivComponent implements OnInit {

  archiv : ArchivItem[] =[new ArchivItem("Testname", [new Measurement(0,40),new Measurement(1,45)],
  3,"no comments", "testBean", new Date())]

  akArchivItem : ArchivItem = this.archiv[0]
  
  constructor() { }

  ngOnInit(): void {
  }

}
