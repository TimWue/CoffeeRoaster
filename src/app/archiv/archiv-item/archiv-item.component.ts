import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ArchivItem } from 'src/app/models/archivItem';
import { Measurement } from 'src/app/models/measurement';
import { ArchivService } from 'src/app/services/archiv.service';
import { RepositoryService } from 'src/app/services/repository.service';

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
 @Output() itemEvent = new EventEmitter<string>();
  
  constructor(private archivService: ArchivService, private repoService : RepositoryService) { }

  ngOnInit(): void {
  }

  onClickShow(){
    this.itemEvent.emit('show');
  }

  onClickPush(){
    this.archivService.setToShowItem(this.archivItem);
  }

  onClickDelete(){
    this.repoService.deleteArchivItem(this.archivItem.id);
    this.itemEvent.emit('delete');
  }

}
