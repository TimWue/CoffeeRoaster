import { Component, OnInit} from '@angular/core';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.css']
})
export class ArchivComponent implements OnInit {
  archivList : ArchivItem[];
  currentItem : ArchivItem = new ArchivItem(-1,"",[new Measurement(0,0)],-1,"","",null);
  
  constructor(private repositoryService : RepositoryService) { }

  ngOnInit(): void {
    this.getArchiv();
  }

handleItemEvent(event : string, index : number){
  if (event === "show"){
    this.setDetail(index);
  } else if(event ==="delete"){
    this.archivList.splice(index,1);
  }

}
 setDetail(index : number){
   this.currentItem = this.archivList[index];
 }

 getArchiv(){
  this.repositoryService.getArchivItem().subscribe(data =>{
    this.archivList = [];
    this.archivList = data;
    this.currentItem = this.archivList[0]
  })
 }
}
