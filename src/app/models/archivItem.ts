import { Measurement } from "./measurement";

export class ArchivItem{
    constructor(public name : string, public data : Measurement[], public  rating : number,
        public comments : string, public bean : string, public dateTime : Date){

    }
}