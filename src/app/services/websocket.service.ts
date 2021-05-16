import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { SensorMessage } from '../models/sensorMessage';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  apiIp : string;
  // We need to improve this as in https://dimitr.im/websockets-angular

  constructor(private configService : ConfigService) {
    this.apiIp = configService.getConfig().apiIp;
    this.initializeWebSocketConnection();
  }
  public stompClient;
  public msg = new Subject<String>();  



  initializeWebSocketConnection() {
    const serverUrl = 'http://'+ this.apiIp+ ':8080/websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(function () {
      return new SockJS(serverUrl);
      });

    // Some Configs
    this.stompClient.debug = () => {}; // https://stackoverflow.com/questions/25683022/how-to-disable-debug-messages-on-sockjs-stomp
    this.stompClient.reconnect_delay = 5000;

    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/temperature/stream', (message) => {
        if (message.body) {
          //console.log(message.body)
          that.msg.next(message.body);
        }
      });
    });

  }

}
