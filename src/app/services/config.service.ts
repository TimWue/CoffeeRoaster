import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    private appConfig;
  
    constructor(private http: HttpClient) { }
  
    loadAppConfig() {
      return this.http.get('/assets/data/appConfig.json')
        .toPromise()
        .then(data => {
          this.appConfig = data;
        });
    }
  
    getConfig() {
      return this.appConfig;
    }
  }