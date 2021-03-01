import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { ArchivItem } from 'src/app/models/archivItem';
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
            max : 350,
            min: 0
          }
      }],
    }
  };

  public ChartColors: Color[] = [{borderColor: "black", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 1, pointRadius:0},
                                 {borderColor: "green", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 1, pointRadius:0},
                                 {borderColor: "blue", backgroundColor:"rgba(0, 0, 0,0)",borderWidth: 1, pointRadius:0}]
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.ChartData = [
      { data: Util.measurement2data(this.archivItem.data[0].measurements), label: this.archivItem.name, type: "line"},
      { data: Util.measurement2data(this.archivItem.data[1].measurements), label: this.archivItem.name, type: "line"},
      { data: Util.measurement2data(this.archivItem.data[2].measurements), label: this.archivItem.name, type: "line"}
    ];
  }

  ngOnInit(): void {
    this.ChartData = [
      { data: Util.measurement2data(this.archivItem.data[0].measurements), label: this.archivItem.name, type: "line"},
      { data: Util.measurement2data(this.archivItem.data[1].measurements), label: this.archivItem.name, type: "line"},
      { data: Util.measurement2data(this.archivItem.data[2].measurements), label: this.archivItem.name, type: "line"}
    ];
    
  }
}
