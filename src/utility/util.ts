import { Datapoint } from "src/app/models/datapoint";
import { Measurement } from "src/app/models/measurement";

export class Util{
    
    static measurement2data(measures : Measurement[]){
        let datapoints : Datapoint[] = [];
        measures.forEach(element => {
          datapoints.push(new Datapoint(element.time,element.temperature))
        });
        return datapoints;
    
      }
}