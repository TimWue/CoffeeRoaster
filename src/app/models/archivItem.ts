import { Measurement } from "./measurement";

export class ArchivItem{
    
    constructor(public id : number, public name : string, public data : Measurement[], public  rating : number,
        public comment : string, public bean : string, public dateTime : Date){

    }
}