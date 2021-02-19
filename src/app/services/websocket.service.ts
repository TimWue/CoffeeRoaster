import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // We need to improve this as in https://dimitr.im/websockets-angular

  constructor() {
    this.initializeWebSocketConnection();
  }
  public stompClient;
  public msg = new Subject<number>();  



  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;

    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/temperature/stream', (message) => {
        if (message.body) {
          let tempMessage = JSON.parse(message.body);
          that.msg.next(tempMessage.temperature);
        }
      });
    });

  }

}
