import { Component, OnInit } from '@angular/core';
import { Measurement } from '../models/measurement';
import { ArchivService } from '../services/archiv.service';

@Component({
  selector: 'app-roast',
  templateUrl: './roast.component.html',
  styleUrls: ['./roast.component.css']
})
export class RoastComponent implements OnInit {

  constructor(private archivService : ArchivService) { }

  ngOnInit(): void {
  }

  


}
