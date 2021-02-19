import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';
import { TimeService } from '../services/time.service';
import { faArchive, faArrowLeft, faBackward, faBars, faChartLine, faCoffee, faCogs, faHourglassHalf, faPlay, faStop, faThermometerThreeQuarters, faUndo } from '@fortawesome/free-solid-svg-icons';
import { EventService } from '../services/event.service';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
//Icons
faTemp = faThermometerThreeQuarters;
faTime = faHourglassHalf
faChart = faChartLine
faReset = faUndo;
faPlay = faPlay;
faStop = faStop;
Omega = '\u00D8';
faBack = faArrowLeft;

// Mark Phases
index = 0;
buttonLabels = ["Markieren", "Phase 1", "Phase 2", "Phase 3","Ende"];
buttonLabel = this.buttonLabels[this.index];

// Placeholders
  time: string = "00:00:00"
  temperature : string = "NA"
  akGradient : string = "NA"
  gradientsAll : number [] = []
  midGradient : string = "NA";
  maxGradient : number = 0;
  maxGradientString : string = "NA";

  // Subscription
  tempSubscription : Subscription;

  constructor(private timeService : TimeService, 
    private tempService : TemperatureService,
    private eventService : EventService,
    private websocketService : WebsocketService) {}

  ngOnInit(): void {
    this.tempService.akGradient.subscribe(value => { 
      this.akGradient = value.toFixed(2);
      this.gradientsAll.push(value);
      if (value > this.maxGradient){
        this.maxGradient = value;
        this.maxGradientString = this.maxGradient.toFixed(2);
      }
      this.midGradient = this.getMean(this.gradientsAll).toFixed(2);
    })
    this.timeService.getTime().subscribe(value => {
      let date = new Date(0);
      date.setSeconds(value);
      this.time = date.toISOString().substr(11, 8);
    })

    // this.tempService.getTemperature().subscribe((value : {time : number, temperature : number}) => {
    //   this.temperature = value.temperature.toFixed(2);
    // })

    this.tempSubscription = this.websocketService.msg.subscribe((msg : number) => {
      this.temperature = msg.toFixed(2);
    })

  }

  getMean(array : number[]){    
    const total = array.reduce((acc, c) => acc + c, 0);
    return total / array.length;  }


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

    // Mark
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
