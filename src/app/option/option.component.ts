import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, interval } from 'rxjs';
import {WebsocketService} from '../services/websocket.service'

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  // private socket: Subject<any>;
  // private counterSubscription: Subscription;
  //public message: number;
  // public sentMessage: string;
  
  constructor(private websocketService: WebsocketService){
    // this.socket = websocketService.createWebsocket();
  }
  
  ngOnInit(){
    /*
    this.websocketService.msg.subscribe((msg : number) => {
      console.log(msg);
      this.message = msg;
    })
    */
   
  }

  

}
