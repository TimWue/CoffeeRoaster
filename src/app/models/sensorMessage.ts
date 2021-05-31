export class SensorMessage{
    constructor(public sensorName : string, public time : number, public value : number) {}

    public toString() : String{
      let date = new Date(this.time);
      return this.sensorName.toString() + ": (time: "
        + date.toTimeString() + ", value: "
        + this.value.toString() + ")"
    }
}
