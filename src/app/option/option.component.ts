import { Component, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription} from 'rxjs';
import { SensorMessage } from '../models/sensorMessage';
import { TempMQTTService } from '../services/temp-mqtt.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
    temp : any
    subscription: Subscription;

    constructor(
        private readonly eventMqtt: TempMQTTService,
    ) {
    }

    ngOnInit() {
        this.subscribeToTopic();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private subscribeToTopic() {
        this.subscription = this.eventMqtt.topic('tempSensor')
            .subscribe((data: IMqttMessage) => {
                let item : SensorMessage= JSON.parse(data.payload.toString());
                console.log(item)            
              });
    }

}
