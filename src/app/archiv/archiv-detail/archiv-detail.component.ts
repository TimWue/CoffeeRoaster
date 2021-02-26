import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-archiv-detail',
  templateUrl: './archiv-detail.component.html',
  styleUrls: ['./archiv-detail.component.css']
})
export class ArchivDetailComponent implements OnInit, OnChanges {
  @Input() archivItem;
  ratingBool : boolean [] = [false,false, false, false, false];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ratingBool = [false,false, false, false, false];
     this.rating2bool();
  }

  ngOnInit(): void {
    this.rating2bool();
  }

  rating2bool(){
    if (this.archivItem.rating){
      for (let i =0; i<this.archivItem.rating; i++){
        this.ratingBool[i] = true;
    }
    }
    
  }

}
