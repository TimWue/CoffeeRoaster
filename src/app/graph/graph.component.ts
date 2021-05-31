import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { Util } from 'src/utility/util';
import { ArchivItem } from '../models/archivItem';
import { Datapoint } from '../models/datapoint';
import { SensorMessage } from '../models/sensorMessage';
import { ArchivService } from '../services/archiv.service';
import { EventService } from '../services/event.service';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  sensor1 = [];
  sensor2 = [];
  sensor3 = [];
  phases = [];
  measures = [];
  public dataArray  = [];

  maxXTick = 20*60;
  tickShift = 20; // um so viel wird maxXTick erhöht wenn maxXTick Daten vorhanden sind
  barChartOptions: ChartOptions;
  public barChartLegend = true;
  public lineChartColors: Color[] = [
    {borderColor: "black", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 3}, //sensor1
    {backgroundColor: "rgba(207, 218, 200,0.4)",borderColor:"rgba(0, 0, 0,0)"}, //background
    {backgroundColor: "rgba(150, 187, 124, 0.3)",borderColor:"rgba(0, 0, 0,0)"}, //background
    {backgroundColor: "rgba(100, 128, 95,0.3)",borderColor:"rgba(0, 0, 0,0)"}, //background
    {borderColor: "yellow"}, //phases
    {borderColor: "grey", backgroundColor:"rgba(0, 0, 0,0)", borderDash: [5,15], borderWidth: 3}, //archivItem
    {borderColor: "green", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 3},  //sensor2
       {borderColor: "blue", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 3},]; //sensor3

  public barChartData: ChartDataSets[];

  constructor(
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

        let data = Util.measurement2data(archivItem.data[0].measurements)
        data.forEach((element : Datapoint) => {
          this.dataArray.push({x: element.x, y: element.y})
        });
      })

    this.tempService.statusUpdate.subscribe(status => {
      if (status === "reset"){
        this.sensor1 = [];
        this.sensor2 = [];
        this.sensor3 = [];
        this.phases = [];
        this.updateData()
      }
    })

    this.tempService.sensorTempSubject[0].subscribe((sensorMessage : SensorMessage) => {
        this.sensor1.push({x : sensorMessage.time, y : sensorMessage.value})
        this.updateTicks(sensorMessage.time);
    })

    this.tempService.sensorTempSubject[1].subscribe((sensorMessage : SensorMessage) => {
      this.sensor2.push({x : sensorMessage.time, y : sensorMessage.value})
      this.updateTicks(sensorMessage.time);
    })

    this.tempService.sensorTempSubject[2].subscribe((sensorMessage : SensorMessage) => {
      this.sensor3.push({x : sensorMessage.time, y : sensorMessage.value})
      this.updateTicks(sensorMessage.time);
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

  updateTicks(time : number){
    if (time > this.maxXTick){
      this.maxXTick += this.tickShift;
      this.updateOptions();
    }
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
      { data: this.sensor1, label: "Sensor 1", type: "line", borderWidth : 0.5, pointRadius:0 },
      {data: [{x:-10,y:150}, {x:-10,y:0},{x:100000,y:0},{x:100000,y:150},{x:-10,y:150}],label :"", type:"line", lineTension: 0},
      {data: [{x:-10,y:300}, {x:-10,y:150},{x:100000,y:150},{x:100000,y:300},{x:-10,y:300}], type:"line", lineTension: 0},
      {data: [{x:-10,y:350}, {x:-10,y:300},{x:100000,y:300},{x:100000,y:350},{x:-10,y:350}], type:"line", lineTension: 0},
      {data: this.phases, pointRadius: 10, pointBackgroundColor:"yellow"},
      { data: this.dataArray, label: "ArchivItem", type: "line", borderWidth : 0.5, pointRadius: 0},
      { data: this.sensor2, label: "Sensor 2", type: "line", borderWidth : 0.5, pointRadius:0 },
      { data: this.sensor3, label: "Sensor 3", type: "line", borderWidth : 0.5, pointRadius:0 },
    ];
  }

  setPhase(){
    this.phases.push(this.measures[this.measures.length-1])
  }

  popPhase(){
    this.phases.pop();
  }

}
