import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-archiv-detail',
  templateUrl: './archiv-detail.component.html',
  styleUrls: ['./archiv-detail.component.css']
})
export class ArchivDetailComponent implements OnInit {
  @Input() archivItem;
  ratingBool : boolean [] = [false,false, false, false, false];
  constructor() { }

  ngOnInit(): void {
    this.rating2bool();
    console.log(this.ratingBool)
  }

  rating2bool(){
    for (let i =0; i<this.archivItem.rating; i++){
        this.ratingBool[i] = true;
    }
  }

}
