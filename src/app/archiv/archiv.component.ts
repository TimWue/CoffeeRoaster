import { Component, OnInit} from '@angular/core';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { ArchivItem } from '../models/archivItem';
import { Measurement } from '../models/measurement';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-archiv',
  templateUrl: './archiv.component.html',
  styleUrls: ['./archiv.component.css']
})
export class ArchivComponent implements OnInit {
  faFilter = faFilter;
  faSort = faSort;
  archivList : ArchivItem[];
  currentItem : ArchivItem = new ArchivItem(-1,"",[new Measurement(0,0)],-1,"","",null);
  
  constructor(private repositoryService : RepositoryService) { }

  ngOnInit(): void {
    this.getArchiv();
  }

  sortByRating(){
    this.archivList.sort((a,b) => (a.rating > b.rating) ? -1 : ((b.rating > a.rating) ? 1 : 0))
  }

  sortByName(){
    this.archivList.sort((a,b) => (a.name < b.name) ? -1 : ((b.name < a.name) ? 1 : 0))
  }

  sortByDate(){
    this.archivList.sort((a,b) => (a.dateTime < b.dateTime) ? -1 : ((b.dateTime < a.dateTime) ? 1 : 0))
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
