import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }


  postRoast(){
    //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = {
      "name": "helloFromAngular",
      "rating": 5,
      "test":3
  
  }
    this.http.post<any>('http://localhost:8080/roast/add', body).subscribe(data => {
        console.log(data);
    });
  }
}
