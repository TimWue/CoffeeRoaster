import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { utils } from 'protractor';
import { ArchivItem } from 'src/app/models/archivItem';
import { Datapoint } from 'src/app/models/datapoint';
import { Measurement } from 'src/app/models/measurement';
import { Util} from 'src/utility/util'

@Component({
  selector: 'app-simple-graph',
  templateUrl: './simple-graph.component.html',
  styleUrls: ['./simple-graph.component.css']
})
export class SimpleGraphComponent implements OnInit, OnChanges {
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
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.archivItem)
    this.ChartData = [
      { data: Util.measurement2data(this.archivItem.data), label: this.archivItem.name, type: "line", borderWidth : 0.5,  pointBackgroundColor: "white" },
    ];
  }

  ngOnInit(): void {
    Util.test();
    
    console.log(this.archivItem)
    this.ChartData = [
      { data: Util.measurement2data(this.archivItem.data), label: this.archivItem.name, type: "line", borderWidth : 0.5,  pointBackgroundColor: "white" },
    ];
  }
}
