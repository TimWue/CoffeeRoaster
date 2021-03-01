import { MultipleMeasurement } from "./multipleMeasurement";

export class ArchivItem{
    
    constructor(public id : number, public name : string, public data : MultipleMeasurement[], public  rating : number,
        public comment : string, public bean : string, public dateTime : Date){

    }
}