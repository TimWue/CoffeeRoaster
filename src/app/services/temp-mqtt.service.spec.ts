import { TestBed } from '@angular/core/testing';

import { TempMQTTService } from './temp-mqtt.service';

describe('TempMQTTService', () => {
  let service: TempMQTTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempMQTTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
