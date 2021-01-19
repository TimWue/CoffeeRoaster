import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { ArchivItem } from 'src/app/models/archivItem';
import { Datapoint } from 'src/app/models/datapoint';
import { Measurement } from 'src/app/models/measurement';

@Component({
  selector: 'app-simple-graph',
  templateUrl: './simple-graph.component.html',
  styleUrls: ['./simple-graph.component.css']
})
export class SimpleGraphComponent implements OnInit {
  @Input() archivItem : ArchivItem;
  public ChartData: ChartDataSets[];
  ChartOptions = {
    animation: {
      duration : 0
    },
    maintainAspectRatio: false,
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
            max : 500,
            min: 0
          }
      }],
    }
  };

  public ChartColors: Color[] = [{borderColor: "white"}]
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.archivItem)
    this.ChartData = [
      { data: this.measurement2data(this.archivItem.data), label: this.archivItem.name, type: "line", borderWidth : 0.5,  pointBackgroundColor: "white" },
    ];
  }

  measurement2data(measures : Measurement[]){
    let datapoints : Datapoint[] = [];
    measures.forEach(element => {
      datapoints.push(new Datapoint(element.time,element.temperature))
    });
    return datapoints;

  }

}
