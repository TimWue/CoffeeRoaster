import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { Util } from 'src/utility/util';
import { ArchivItem } from '../models/archivItem';
import { Datapoint } from '../models/datapoint';
import { ArchivService } from '../services/archiv.service';
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
  maxXTick = 20*60;
  tickShift = 20; // um so viel wird maxXTick erhöht wenn maxXTick Daten vorhanden sind
  barChartOptions: ChartOptions;
  public barChartLegend = true;
  public lineChartColors: Color[] = [
    {borderColor: "black", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 3},
    {backgroundColor: "rgba(207, 218, 200,0.4)",borderColor:"rgba(0, 0, 0,0)"},
    {backgroundColor: "rgba(150, 187, 124, 0.3)",borderColor:"rgba(0, 0, 0,0)"},
    {backgroundColor: "rgba(100, 128, 95,0.3)",borderColor:"rgba(0, 0, 0,0)"},
    {borderColor: "yellow"},
    {borderColor: "grey", backgroundColor:"rgba(0, 0, 0,0)", borderDash: [5,15], borderWidth: 3}];

  public barChartData: ChartDataSets[];
  public dataArray  = [];
  
  constructor(private timeService : TimeService, 
    private tempService : TemperatureService,
    private eventService : EventService,
    private archivService: ArchivService) {
    }

  ngOnInit() {
    this.updateOptions();
    this.updateData();

    this.archivService.toShowItemSubject.subscribe(
      (archivItem : ArchivItem) =>{
        if (this.dataArray.length > 0){
          this.dataArray = [];
          this.updateData();
        }
        
        let data = Util.measurement2data(archivItem.data)
        data.forEach((element : Datapoint) => {
          this.dataArray.push({x: element.x, y: element.y})
        });
      })
     
    this.tempService.statusUpdate.subscribe(status => {
      if (status === "reset"){
        this.measures = [];
        this.phases = [];
        this.updateData()
      }
    })

    this.tempService.getTemperature().subscribe((value : {time : number, temperature : number}) => {
      let time = (value.time)
      this.measures.push({x : time, y: value.temperature})

      if (time > this.maxXTick){
        this.maxXTick += this.tickShift;
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
                max : 350,
                min: 0
              }
          }],
        }
      };

  }

  updateData(){
    this.barChartData = [
      { data: this.measures, label: "Röstung", type: "line", borderWidth : 0.5, pointRadius:0 },
      {data: [{x:-10,y:150}, {x:-10,y:0},{x:100000,y:0},{x:100000,y:150},{x:-10,y:150}],label :"", type:"line", lineTension: 0},
      {data: [{x:-10,y:300}, {x:-10,y:150},{x:100000,y:150},{x:100000,y:300},{x:-10,y:300}], type:"line", lineTension: 0},
      {data: [{x:-10,y:350}, {x:-10,y:300},{x:100000,y:300},{x:100000,y:350},{x:-10,y:350}], type:"line", lineTension: 0},
      {data: this.phases, pointRadius: 10, pointBackgroundColor:"yellow"},
      { data: this.dataArray, 
        label: "ArchivItem", 
        type: "line", 
        borderWidth : 0.5, pointRadius: 0}
    ];
    // this.barChartData = [
    //   { data: this.measures, label: "Röstung", type: "line", borderWidth : 0.5, pointRadius:0 },
    //   {data: [{x:-10,y:200}, {x:-10,y:150},{x:1000,y:150},{x:1000,y:200},{x:-10,y:200}], type:"line", lineTension: 0},
    //   {data: [{x:-10,y:350}, {x:-10,y:200},{x:1000,y:200},{x:1000,y:350},{x:-10,y:350}], type:"line", lineTension: 0},
    //   {data: [{x:-10,y:500}, {x:-10,y:350},{x:1000,y:350},{x:1000,y:500},{x:-10,y:500}], type:"line", lineTension: 0},
    //   {data: this.phases, pointRadius: 10, pointBackgroundColor:"yellow"}
    // ];
    // this.barChartData = this.tempData;
  }

  setPhase(){
    this.phases.push(this.measures[this.measures.length-1])
    console.log(this.measures[this.measures.length-1])
    console.log(this.phases[this.phases.length-1])
    // this.updateData();

  }

  popPhase(){
    this.phases.pop();
    // this.updateData();
  }

}