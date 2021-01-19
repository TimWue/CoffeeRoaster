import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  graphEvent = new Subject<string>();

  constructor() { }

  emitPhaseAdd(){
    this.graphEvent.next("addPhase")
  }

  emitPhaseDelete(){
    this.graphEvent.next("deletePhase")

  }
}
