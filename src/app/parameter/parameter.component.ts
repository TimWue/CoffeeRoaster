import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {
  index = 0;
  buttonLabels = ["Markieren", "Phase 1", "Phase 2", "Phase 3","Ende"];
  buttonLabel = this.buttonLabels[this.index];

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
  }
  markEvent(){
    if (this.index > 0){
      this.eventService.emitPhaseAdd();
    }
    this.index ++
    this.buttonLabel = this.buttonLabels[this.index];
    
  }

  reverseMarkEvent(){
    this.index --
    this.buttonLabel = this.buttonLabels[this.index];
    this.eventService.emitPhaseDelete();
  }
}
