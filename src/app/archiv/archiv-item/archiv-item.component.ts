import { Component, Input, OnInit } from '@angular/core';
import { faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ArchivItem } from 'src/app/models/archivItem';
import { Measurement } from 'src/app/models/measurement';

@Component({
  selector: 'app-archiv-item',
  templateUrl: './archiv-item.component.html',
  styleUrls: ['./archiv-item.component.css']
})
export class ArchivItemComponent implements OnInit {
  faTrash = faTrash;
  faEye = faEye;
  faAdd = faPlus;
 @Input() archivItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
