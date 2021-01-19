import { Component, OnInit } from '@angular/core';
import { faArchive, faBars, faCoffee, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faCoffee = faCoffee;
  faCogs = faCogs;
  faArchiv = faArchive;

  constructor() { }

  ngOnInit(): void {
  }

}
