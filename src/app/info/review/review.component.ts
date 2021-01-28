import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  ratingBool : boolean [] = [false,false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

}
