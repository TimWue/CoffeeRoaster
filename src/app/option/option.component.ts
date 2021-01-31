import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, interval } from 'rxjs';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  private socket: Subject<any>;
  private counterSubscription: Subscription;
  public message: string;
  public sentMessage: string;
  
  constructor(websocketService: WebService){
    this.socket = websocketService.createWebsocket();
  }
  
  ngOnInit(){
    this.socket.subscribe(
    message => this.message = message.data
    );
  }

  public launchCounter(){ 
    //Counter already initialized
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
    let counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      num => {
        this.sentMessage = 'Websocket Message '+ num;
        this.socket.next(this.sentMessage);
      }
    );
  }

}
