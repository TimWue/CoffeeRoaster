import { Component, OnInit } from '@angular/core';
import { faArchive, faCoffee, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  faCoffee = faCoffee;
  faCogs = faCogs;
  faArchiv = faArchive;
  constructor() { }

  ngOnInit(): void {
  }

}
