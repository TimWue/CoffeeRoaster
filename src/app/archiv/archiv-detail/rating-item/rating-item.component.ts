import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent implements OnInit {
@Input() isRated : boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
