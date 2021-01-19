import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private timeService : TimeService, private tempService : TemperatureService) { }

  ngOnInit(): void {
  }

  startTimer(){
    this.timeService.startTimer();
  }

  endTimer(){
    this.timeService.stopTimer();
  }

  resetTimer(){
    this.timeService.resetTimer();
    this.tempService.resetTemperature();
  }
}
