import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  
  graphdata = new Subject<any>();


  constructor() { }

  addData(data : any){
    console.log("Data is service")
    this.graphdata.next(data);
  }
}
