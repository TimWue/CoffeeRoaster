import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { EventService } from '../services/event.service';
import { TemperatureService } from '../services/temperature.service';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  phases = [];
  measures = [];
  maxXTick = 100;
  tickShift = 20; // um so viel wird maxXTick erhöht wenn maxXTick Daten vorhanden sind
  barChartOptions: ChartOptions;
  // public barChartOptions: ChartOptions = {
  //   animation: {
  //     duration : 0
  //   },
  //   maintainAspectRatio: false,
  //   responsive: true,
  //   scales : {
  //     xAxes: [{
  //        ticks: {
  //           max : this.maxXTick,
  //           min: 0
  //         }
  //     }],
  //     yAxes: [{
  //       ticks: {
  //          max : 500,
  //          min: 0
  //        }
  //    }]
  //   }
  // };
  public barChartLegend = true;
  public lineChartColors: Color[] = [
    {
      borderColor: "white"
    },
    { 
      backgroundColor: "rgba(0,200,0,0.2)",
    },
    { 
      backgroundColor: "rgba(250,150,0,0.2)",
    },
    { 
      backgroundColor: "rgba(255,0,0,0.2)",
    },
    {
      // borderColor: "yellow"
    }
  ];
  public barChartData: ChartDataSets[];
  // public barChartData: ChartDataSets[] = [
  //   { data: this.measures, label: "Röstung", type: "line", borderWidth : 0.5,  pointBackgroundColor: "white" },
  //   {data: [{x:-10,y:200}, {x:-10,y:150},{x:1000,y:150},{x:1000,y:200},{x:-10,y:200}], type:"line", lineTension: 0},
  //   {data: [{x:-10,y:350}, {x:-10,y:200},{x:1000,y:200},{x:1000,y:350},{x:-10,y:350}], type:"line", lineTension: 0},
  //   {data: [{x:-10,y:500}, {x:-10,y:350},{x:1000,y:350},{x:1000,y:500},{x:-10,y:500}], type:"line", lineTension: 0},
  //   {data: this.phases, type: "line"}
  // ];

  constructor(private timeService : TimeService, 
    private tempService : TemperatureService,
    private eventService : EventService) {
    }

  ngOnInit() {
    this.updateOptions();
    this.updateData();
    this.tempService.statusUpdate.subscribe(status => {
      if (status === "rest"){
        this.measures = [];
        this.phases = [];
        this.updateData()
      }
    })

    this.tempService.getTemperature().subscribe((value : {time : number, temperature : number}) => {
      console.log(value)
      let time = (value.time)
      this.measures.push({x : time, y: value.temperature})
      if (time > this.maxXTick){
        this.maxXTick += this.tickShift;
        // console.log(this.maxXTick)
        this.updateOptions();  
        
      }
     })

     this.eventService.graphEvent.subscribe(value => {
       if (value === "addPhase"){
         this.setPhase()
       }
       if (value === "deletePhase"){
        this.popPhase()
      }
     })
  }

  updateOptions(){
      this.barChartOptions = {
        animation: {
          duration : 0
        },
        maintainAspectRatio: false,
        responsive: true,
        scales : {
          xAxes: [{
              ticks: {
                max : this.maxXTick,
                min: 0
              }
          }],
          yAxes: [{
            ticks: {
                max : 500,
                min: 0
              }
          }],
        }
      };

  }

  updateData(){
    this.barChartData = [
      { data: this.measures, label: "Röstung", type: "line", borderWidth : 0.5,  pointBackgroundColor: "white" },
      {data: [{x:-10,y:200}, {x:-10,y:150},{x:1000,y:150},{x:1000,y:200},{x:-10,y:200}], type:"line", lineTension: 0},
      {data: [{x:-10,y:350}, {x:-10,y:200},{x:1000,y:200},{x:1000,y:350},{x:-10,y:350}], type:"line", lineTension: 0},
      {data: [{x:-10,y:500}, {x:-10,y:350},{x:1000,y:350},{x:1000,y:500},{x:-10,y:500}], type:"line", lineTension: 0},
      {data: this.phases, pointRadius: 10, pointBackgroundColor:"yellow"}
    ];
  }

  setPhase(){
    this.phases.push(this.measures[this.measures.length-1])
    console.log(this.measures[this.measures.length-1])
    console.log(this.phases[this.phases.length-1])
    this.updateData();

  }

  popPhase(){
    this.phases.pop();
    this.updateData();
  }

}